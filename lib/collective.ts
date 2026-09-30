// Content for the Collective Home page, ported from the Claude Design file
// `Collective Home.dc.html`. Everything the page renders lives here.

export type MemberId = "1" | "2" | "3" | "4" | "5" | "6" | "7";

export type Tag = { skill: string; label: string };

export type Member = {
  id: MemberId;
  name: string;
  /** Line under the name on the member card. */
  role: string;
  /** Caption revealed under the hero portrait on hover. */
  heroLabel: string;
  /** Short label inside the network-diagram node (optional). */
  networkLabel?: string;
  bio: string;
  /** Discipline tags shown on the card; the first is the accent tag. */
  tags: Tag[];
  /** Community roles this member holds (keys from `roles`). */
  roles: string[];
  /** Portrait image in /public — leave undefined to show a placeholder. */
  photo?: string;
  hero: { left: string; top: string; width: string; rotate: number; depth: number };
  node: { x: number; y: number };
};

export const members: Member[] = [
  {
    id: "1",
    name: "Redge",
    role: "Founder",
    heroLabel: "Redge · Founder",
    networkLabel: "REDGE",
    bio: "I’m Redge, a Web3 Community Growth Strategist and Community Manager focused on building active, informed and loyal communities. With 4+ years of experience across Web3, I’ve worked with communities and projects across Telegram, Discord and X, helping with community management, moderation, growth campaigns, raid coordination, content and ecosystem engagement. I don’t see community management as simply keeping a chat active. The goal is to create an environment where people have a reason to participate, return and become part of the ecosystem.",
    tags: [
      { skill: "community", label: "Community" },
      { skill: "strategy", label: "Growth Campaigns" },
      { skill: "creative", label: "Content" },
    ],
    roles: ["kol", "community-manager", "growth-strategist"],
    photo: "/members/redge.jpg",
    hero: { left: "0%", top: "8%", width: "22%", rotate: -3, depth: 1.6 },
    node: { x: 500, y: 155 },
  },
  {
    id: "2",
    name: "nofazechris",
    role: "Chris Eguaoba · Co-founder & Developer",
    heroLabel: "nofazechris · Co-founder",
    networkLabel: "NOFAZE",
    bio: "I’m nofazechris — Chris Eguaoba — co-founder of Kliq and a developer who builds the products behind Web3 projects. I work across the full stack, from interfaces people enjoy using to the systems that keep them running, and I lean on AI and automation to remove the repetitive work so a small team can move like a bigger one. I care about the details that make a product feel alive — how it loads, how it responds, how it reads — and about turning rough ideas into something that ships and lasts. Alongside the code I think about product and data: what people actually use, and what the numbers say about it.",
    tags: [
      { skill: "ai", label: "AI Systems" },
      { skill: "software", label: "Full Stack" },
      { skill: "automation", label: "Automation" },
      { skill: "product", label: "Product" },
      { skill: "data", label: "Data" },
    ],
    roles: ["developer"],
    photo: "/members/nofazechris.png",
    hero: { left: "25%", top: "0%", width: "21%", rotate: 2, depth: 2.6 },
    node: { x: 606, y: 206 },
  },
  {
    id: "3",
    name: "Omni",
    role: "Growth Head",
    heroLabel: "Omni · Growth",
    networkLabel: "OMNI",
    bio: "Web3-focused contributor with a foundation in community building, growth strategy, partnerships, content marketing and customer relations. I work with emerging Web3 projects by identifying growth opportunities, creating educational and promotional content, supporting communities, developing partnership ideas and contributing to project visibility. My approach combines Web3 knowledge with people-focused skills developed through training in occupational soft skills, customer relations and human resource management.",
    tags: [
      { skill: "community", label: "Community" },
      { skill: "strategy", label: "Growth Strategy" },
      { skill: "creative", label: "Content" },
    ],
    roles: ["campaign-manager"],
    photo: "/members/omni.jpg",
    hero: { left: "49%", top: "10%", width: "22%", rotate: -2, depth: 1.1 },
    node: { x: 632, y: 320 },
  },
  {
    id: "4",
    name: "La Loba",
    role: "Partnership Head",
    heroLabel: "La Loba · Partnerships",
    networkLabel: "LA LOBA",
    bio: "I’m a content writer and strategist helping Web3 and privacy projects turn complex ideas into content people can actually understand. Through research, writing and content strategy, I help projects communicate their ideas clearly, answer the questions their audience is already asking, and create content that gives people a reason to care. Whether it’s breaking down a technical privacy concept, writing founder-led content or building a content strategy from scratch.",
    tags: [
      { skill: "creative", label: "Writing" },
      { skill: "research", label: "Research" },
      { skill: "strategy", label: "Content Strategy" },
    ],
    roles: ["creative-writer"],
    photo: "/members/la-loba.jpg",
    hero: { left: "7%", top: "52%", width: "23%", rotate: 3, depth: 3.2 },
    node: { x: 559, y: 412 },
  },
  {
    id: "5",
    name: "Prime",
    role: "Community Lead",
    heroLabel: "Prime · Community",
    networkLabel: "PRIME",
    bio: "I’m a Web3 community manager, growth strategist and space host with experience helping emerging crypto projects build communities, increase visibility and create meaningful engagement. I work with Web3 projects by managing and growing communities, hosting spaces, developing engagement strategies, coordinating promotional campaigns and helping projects maintain an active presence across social platforms. I also work with structured engagement teams to create consistent, organic conversations around projects and their products.",
    tags: [
      { skill: "community", label: "Community" },
      { skill: "strategy", label: "Growth Strategy" },
    ],
    roles: ["growth-lead", "community-manager", "space-host"],
    photo: "/members/prime.webp",
    hero: { left: "36%", top: "47%", width: "24%", rotate: -1.5, depth: 2.1 },
    node: { x: 368, y: 320 },
  },
  {
    id: "6",
    name: "Metanauts",
    role: "Marketer",
    heroLabel: "Metanauts · Marketer",
    networkLabel: "METANAUTS",
    bio: "I work across Web3 content, community operations, X Spaces, and AI-assisted visual creation. My content work focuses on making Web3 topics easier to understand through threads, explainers, ecosystem breakdowns, and other social content. My community experience covers management, moderation, member communication, engagement, and the systems that support active online communities. More recently, I have expanded into AI-assisted visual creation, primarily working with images and graphics.",
    tags: [
      { skill: "creative", label: "Content" },
      { skill: "community", label: "Community" },
      { skill: "ai", label: "AI Visuals" },
    ],
    roles: ["marketer", "content-creator"],
    photo: "/members/metanauts.jpg",
    hero: { left: "73%", top: "2%", width: "22%", rotate: 2.5, depth: 1.8 },
    node: { x: 395, y: 206 },
  },
  {
    id: "7",
    name: "Abel",
    role: "Brand Manager / Designer",
    heroLabel: "Abel · Brand & Design",
    networkLabel: "ABEL",
    bio: "Abel is a creative-focused Web3 content creator who turns complex crypto projects into simple, engaging stories. He creates visual content, motion designs, educational threads, project breakdowns, and social media content that help projects communicate clearly and build attention.",
    tags: [
      { skill: "creative", label: "Storytelling" },
      { skill: "design", label: "Visual & Motion" },
      { skill: "ai", label: "AI" },
      { skill: "automation", label: "Automation" },
    ],
    roles: ["ai-automator", "mini-kol"],
    photo: "/members/abel.jpg",
    hero: { left: "65%", top: "50%", width: "23%", rotate: 2, depth: 1.4 },
    node: { x: 441, y: 412 },
  },
];

/** Everything a member touches: their card disciplines, then their roles. */
export const skillsOf = (id: string): string[] => {
  const m = members.find((x) => x.id === id);
  return m ? [...m.tags.map((t) => t.skill), ...m.roles] : [];
};

export const membersOf = (skill: string): MemberId[] =>
  members.filter((m) => skillsOf(m.id).includes(skill)).map((m) => m.id);

type Anchor = "start" | "middle" | "end";

export const disciplines: {
  key: string;
  label: string;
  node: { x: number; y: number };
  text: { x: number; y: number; anchor: Anchor };
}[] = [
  { key: "ai", label: "AI", node: { x: 500, y: 40 }, text: { x: 500, y: 22, anchor: "middle" } },
  { key: "software", label: "Software", node: { x: 753, y: 88 }, text: { x: 769, y: 83, anchor: "start" } },
  { key: "design", label: "Design", node: { x: 909, y: 213 }, text: { x: 925, y: 208, anchor: "start" } },
  { key: "product", label: "Product", node: { x: 909, y: 367 }, text: { x: 925, y: 362, anchor: "start" } },
  { key: "research", label: "Research", node: { x: 753, y: 492 }, text: { x: 769, y: 512, anchor: "start" } },
  { key: "strategy", label: "Strategy", node: { x: 500, y: 540 }, text: { x: 500, y: 566, anchor: "middle" } },
  { key: "data", label: "Data", node: { x: 247, y: 492 }, text: { x: 231, y: 512, anchor: "end" } },
  { key: "community", label: "Community", node: { x: 91, y: 367 }, text: { x: 75, y: 362, anchor: "end" } },
  { key: "creative", label: "Creative", node: { x: 91, y: 213 }, text: { x: 75, y: 208, anchor: "end" } },
  { key: "automation", label: "Automation", node: { x: 247, y: 88 }, text: { x: 231, y: 83, anchor: "end" } },
];

export const roles: { key: string; label: string }[] = [
  { key: "space-host", label: "Space Host" },
  { key: "community-manager", label: "Community Manager" },
  { key: "community-moderator", label: "Community Moderator" },
  { key: "hype-mods", label: "Hype Mods" },
  { key: "growth-strategist", label: "Growth Strategist" },
  { key: "kol", label: "Key Opinion Leader (KOL)" },
  { key: "mini-kol", label: "Mini KOL" },
  { key: "content-creator", label: "Content Creator" },
  { key: "marketer", label: "Marketer" },
  { key: "ai-automator", label: "AI Automator" },
  { key: "project-manager", label: "Project Manager" },
  { key: "project-interns", label: "Project Interns" },
  { key: "developer", label: "Developer" },
  { key: "creative-writer", label: "Creative Writer" },
  { key: "growth-lead", label: "Growth Lead" },
  { key: "campaign-manager", label: "Campaign Manager" },
];

export const roleLabel = (key: string) => roles.find((r) => r.key === key)?.label ?? key;

export type Project = {
  id: string;
  meta: string;
  title: string;
  body: string;
  /** Members who worked on it (shown as tags; empty hides the row). */
  team: MemberId[];
  aspect: string;
  image?: string;
  link?: { href: string; label: string };
};

/** Total projects worked on. Only a few are showcased below, so this is not projects.length. */
export const projectsWorkedOn = "20+";

export const projects: Project[] = [
  {
    id: "wallstreetshift",
    meta: "Project 01 · Solana · DEX",
    title: "WallStreetShift",
    body: "A non-custodial token swap on Solana — shift one token into another, fast and built for clarity. Live on the web, with a companion mobile app.",
    team: [],
    aspect: "4 / 3",
    image: "/projects/wallstreetshift.png",
    link: { href: "https://app.wallstreetshift.com/", label: "Open the app" },
  },
  {
    id: "cookiebounties",
    meta: "Project 02 · Cookie Chain · Bounties",
    title: "Cookie Bounties",
    body: "Community-powered tasks funded and settled on Cookie Chain. The reward is locked in escrow before anyone starts working, then paid out on-chain once the work is approved.",
    team: [],
    aspect: "4 / 3",
    image: "/projects/cookiebounties.png",
    link: { href: "https://cookiebounties.xyz/", label: "Open the site" },
  },
  {
    id: "pork",
    meta: "Project 03 · Income project",
    title: "Pork",
    body: "An income project where we ran the KOL calls, pushing it out to its audience, and built up its Telegram group and community.",
    team: [],
    aspect: "1 / 1",
    image: "/projects/pork.png",
    link: { href: "https://t.me/porkytheprankster", label: "Join the Telegram" },
  },
];

export const values = [
  {
    title: "Curiosity",
    body: "We dig into how projects, communities and markets really work, then ask the questions that make campaigns sharper and products better.",
  },
  {
    title: "Building",
    body: "We ship. Sites, content, communities and campaigns get built, tested and improved in the open, not just planned in a deck.",
  },
  {
    title: "Collaboration",
    body: "Community, growth, design and development under one roof. The best ideas land where our skills overlap.",
  },
  {
    title: "Growth",
    body: "For the projects we serve and for ourselves. We measure what works, learn fast and keep raising the bar.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#members", label: "Members" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export const contact = {
  email: "kliqpartnership@gmail.com",
  github: "https://github.com/nofazechris",
  // TODO: paste the X (Twitter) profile URL here — the footer shows the link once it is set.
  x: "",
};
