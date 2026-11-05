"use client";

import { useEffect, useState } from "react";
import { employees } from "@/lib/data";
import type { Employee } from "@/lib/data";

const backgrounds = ["#E8E2D0", "#DCD6C6", "#E9D9CF", "#D9DDD3", "#E4DCE0"];
const skins = ["#F1D3B8", "#E0B48F", "#C68E65", "#8D5A3B", "#6B4128"];
const hairs = ["#2B211C", "#4A3326", "#7A5A3A", "#A8A29A", "#1F1E1D"];
const shirts = ["#C96442", "#6B6A68", "#8A9A86", "#7C8794", "#B89A6A"];

function hash(text: string) {
  let h = 0;
  for (const char of text) h = (h * 31 + char.charCodeAt(0)) >>> 0;
  return h;
}

function Photo({ id }: { id: string }) {
  const h = hash(id);
  const bg = backgrounds[h % backgrounds.length];
  const skin = skins[(h >> 3) % skins.length];
  const hair = hairs[(h >> 6) % hairs.length];
  const shirt = shirts[(h >> 9) % shirts.length];
  const style = (h >> 12) % 3;

  return (
    <svg viewBox="0 0 88 88" width="100%" height="100%" aria-hidden="true">
      <rect width="88" height="88" fill={bg} />
      <path d="M12 88c2-16 14-24 32-24s30 8 32 24z" fill={shirt} />
      <rect x="38" y="48" width="12" height="14" rx="4" fill={skin} />
      {style === 0 && (
        <path d="M26 40c0-16 8-24 18-24s18 8 18 24c0 6-2 8-2 8H28s-2-2-2-8z" fill={hair} />
      )}
      {style === 1 && <circle cx="44" cy="36" r="21" fill={hair} />}
      {style === 2 && (
        <path d="M24 46c-2-20 6-30 20-30s22 10 20 30c-2-6-4-10-6-12H30c-2 2-4 6-6 12z" fill={hair} />
      )}
      <ellipse cx="44" cy="40" rx="14" ry="16" fill={skin} />
      {style === 0 && <path d="M30 34c4-8 24-8 28 0-6-4-22-4-28 0z" fill={hair} />}
      {style === 1 && <path d="M30 32c4-6 24-6 28 0-8-3-20-3-28 0z" fill={hair} />}
      <circle cx="38.5" cy="41" r="1.4" fill="#1F1E1D" />
      <circle cx="49.5" cy="41" r="1.4" fill="#1F1E1D" />
      <path d="M40 48c2 2 6 2 8 0" fill="none" stroke="#1F1E1D" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Node({
  person,
  selectedId,
  onSelect,
}: {
  person: Employee;
  selectedId: string | null;
  onSelect: (p: Employee) => void;
}) {
  const children = employees.filter((e) => e.reportsTo === person.id);
  const [open, setOpen] = useState(true);

  return (
    <li>
      <button
        type="button"
        className={selectedId === person.id ? "hex selected" : "hex"}
        onClick={() => onSelect(person)}
      >
        <span className="hex-inner">
          <span className="hex-name">{person.name}</span>
          <span className="hex-role">{person.role}</span>
        </span>
      </button>

      {children.length > 0 && (
        <>
          <button
            type="button"
            className="node-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Collapse" : "Expand"}
          >
            {open ? "−" : "+"}
          </button>
          {open && (
            <ul>
              {children.map((child) => (
                <Node
                  key={child.id}
                  person={child}
                  selectedId={selectedId}
                  onSelect={onSelect}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );
}

export default function TeamPage() {
  const [selected, setSelected] = useState<Employee | null>(null);
  const root = employees.find((e) => !e.reportsTo);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const [first, ...rest] = selected ? selected.name.split(" ") : [""];

  return (
    <div>
      <header className="page-head">
        <h1>Your team</h1>
        <p className="page-sub">Click a person to see who they are</p>
      </header>

      <div className="tree-wrap">
        <div className="tree">
          <ul>
            {root && (
              <Node
                person={root}
                selectedId={selected?.id ?? null}
                onSelect={setSelected}
              />
            )}
          </ul>
        </div>
      </div>

      {selected && (
        <div className="pcard-backdrop" onClick={() => setSelected(null)}>
          <div
            className="pcard"
            role="dialog"
            aria-label={selected.name}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pcard-photo">
              <Photo id={selected.id} />
            </div>
            <dl className="pcard-fields">
              <dt>Nom</dt>
              <dd>{rest.join(" ") || first}</dd>
              <dt>Prénom</dt>
              <dd>{first}</dd>
              <dt>Poste</dt>
              <dd>{selected.role}</dd>
              <dt>Équipe</dt>
              <dd>{selected.team}</dd>
              <dt>Email</dt>
              <dd>{selected.email}</dd>
              <dt>ID</dt>
              <dd>{selected.id}</dd>
            </dl>
            <button
              type="button"
              className="pcard-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}