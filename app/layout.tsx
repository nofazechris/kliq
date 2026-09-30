import type { Metadata } from "next";
import { Caprasimo, Figtree } from "next/font/google";
import "./globals.css";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caprasimo",
});

const figtree = Figtree({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Kliq — Different minds. One collective.",
  description:
    "We help Web3 projects grow and stay engaged — community spaces, KOL campaigns, content, design and sites that feel alive. The engine behind the scenes, making sure projects don’t just launch, but last.",
};

// Hides [data-reveal] elements before first paint (see Reveal.tsx), unless
// the visitor prefers reduced motion or the tab is in the background.
const revealGate = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&document.visibilityState==='visible')document.documentElement.dataset.reveal='1'}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${caprasimo.variable} ${figtree.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealGate }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
