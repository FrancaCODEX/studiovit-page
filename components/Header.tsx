"use client";

import { useEffect, useState } from "react";
import { contact, studio } from "@/content/site";
import { ContactButton } from "./ContactButton";

const NAV = [
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Localização" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#topo" className="font-display text-2xl italic tracking-tight" aria-label={`${studio.handle}, início`}>
          <span className="text-gold">_</span>studiovit
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="label-caps py-3 text-ash transition-colors hover:text-bone">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ContactButton size="sm" label={contact.short} className="hidden sm:inline-flex" />
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal (celular)"
        hidden={!open}
        className="border-t border-line bg-ink md:hidden"
      >
        <ul className="container-page flex flex-col py-2">
          {NAV.map((item) => (
            <li key={item.href} className="border-b border-line">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center font-display text-3xl"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <ContactButton className="w-full" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
