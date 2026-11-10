import { contact } from "@/content/site";

type Props = { size?: "sm" | "lg"; className?: string; label?: string };

export function ContactIcon({ className = "" }: { className?: string }) {
  return contact.channel === "whatsapp" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" className={className}>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Z" />
      <path d="M9 8.5c0 3.2 2.3 6 5.5 6.5l1.2-1.7-2-1-.9.9a4.5 4.5 0 0 1-2-2l.9-.9-1-2Z" fill="currentColor" stroke="none" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function ContactButton({ size = "lg", className = "", label = contact.label }: Props) {
  const sizing = size === "lg" ? "min-h-14 px-7 text-base" : "min-h-11 px-4 text-sm";
  return (
    <a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 bg-gold font-semibold text-ink transition-colors hover:bg-bone ${sizing} ${className}`}
    >
      <ContactIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}
