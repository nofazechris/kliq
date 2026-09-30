import { contact } from "@/lib/collective";

// Sends the "Reach out" form to the team inbox using Resend (https://resend.com).
//
// Setup: create a free Resend account with the inbox address below, create an API key
// and set it as RESEND_API_KEY (in .env.local for development, and in the hosting
// provider's environment variables in production). With Resend's default sender
// (onboarding@resend.dev) mail can only be delivered to the account owner's address,
// so sign up with the same address as `contact.email`. To send elsewhere, verify a
// domain in Resend and set CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL.

const LIMITS = { name: 100, email: 200, project: 200, message: 5000 } as const;

const clean = (value: unknown, max: number) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this in. Pretend success so bots move on.
  if (clean(body._honey, 50)) return Response.json({ ok: true });

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const project = clean(body.project, LIMITS.project);
  const message = clean(body.message, LIMITS.message);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid_fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — contact form message was not sent.");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const subject = project ? `Project enquiry — ${project}` : "Project enquiry";
  const text = [`Name: ${name}`, `Email: ${email}`, `Project or company: ${project || "—"}`, "", message || "(no message)"].join(
    "\n",
  );

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Kliq Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? contact.email],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Resend rejected the contact email:", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
