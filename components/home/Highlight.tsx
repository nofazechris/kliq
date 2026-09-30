"use client";

import { createContext, useContext, useMemo, useState, type ReactNode, type SyntheticEvent } from "react";
import { members, membersOf, roleLabel, skillsOf } from "@/lib/collective";

// Cross-highlighting: hovering or focusing any element tagged with
// `data-member` or `data-skill` lights up everything connected to it and
// dims the rest. One delegated listener on the page root drives it.

export const DEFAULT_READOUT = "Hover a discipline or role to see who holds it";

type Highlight = {
  /** Members that are lit, or null when nothing is active. */
  members: string[] | null;
  /** Skills/roles that are lit, or null when nothing is active. */
  skills: string[] | null;
  readout: string;
};

const HighlightContext = createContext<Highlight>({ members: null, skills: null, readout: DEFAULT_READOUT });

function resolve(key: string | null): Highlight {
  if (!key) return { members: null, skills: null, readout: DEFAULT_READOUT };
  const id = key.slice(1);
  if (key[0] === "m") {
    const skills = skillsOf(id);
    const name = members.find((m) => m.id === id)?.name ?? id;
    return { members: [id], skills, readout: `${name} — ${skills.join(" · ")}` };
  }
  const ids = membersOf(id);
  return {
    members: ids,
    skills: [id],
    readout: `${roleLabel(id).toUpperCase()} — ${ids.map((i) => i.padStart(2, "0")).join(" · ")}`,
  };
}

export function HighlightRoot({ className, children }: { className?: string; children: ReactNode }) {
  const [key, setKey] = useState<string | null>(null);
  const value = useMemo(() => resolve(key), [key]);

  const onPointer = (e: SyntheticEvent) => {
    const el = (e.target as Element).closest?.("[data-member],[data-skill]") as HTMLElement | SVGElement | null;
    setKey(el ? (el.dataset.member ? "m" + el.dataset.member : "s" + el.dataset.skill) : null);
  };

  return (
    <HighlightContext.Provider value={value}>
      <div className={className} onPointerMove={onPointer} onFocus={onPointer} onPointerLeave={() => setKey(null)}>
        {children}
      </div>
    </HighlightContext.Provider>
  );
}

export function useHighlight() {
  const hl = useContext(HighlightContext);
  return {
    readout: hl.readout,
    /** true = lit, false = dimmed, null = nothing active */
    member: (id: string) => (hl.members ? hl.members.includes(id) : null),
    skill: (key: string) => (hl.skills ? hl.skills.includes(key) : null),
    edge: (id: string, key: string) =>
      hl.members && hl.skills ? hl.members.includes(id) && hl.skills.includes(key) : null,
  };
}
