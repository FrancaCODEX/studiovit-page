/**
 * Espaço reservado para fotos ainda não autorizadas.
 * Desenho abstrato gerado em SVG: não representa nenhuma tatuagem real.
 */
type Props = { label: string; index?: number; className?: string };

const STROKES = [
  "M-10 70 C 30 20, 60 110, 110 40",
  "M-10 30 C 40 90, 70 0, 110 75",
  "M20 -10 C 0 50, 100 50, 70 110",
  "M-10 55 C 25 55, 45 10, 110 20",
];

export function Placeholder({ label, index = 0, className = "" }: Props) {
  const d = STROKES[index % STROKES.length];
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${label}`}
      className={`relative h-full w-full overflow-hidden bg-graphite ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <radialGradient id={`ph-${index}`} cx="30%" cy="20%" r="90%">
            <stop offset="0" stopColor="#2a2927" />
            <stop offset="1" stopColor="#111113" />
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#ph-${index})`} />
        <path d={d} fill="none" stroke="#c9a35f" strokeOpacity="0.45" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
        <path
          d={d}
          fill="none"
          stroke="#ece7de"
          strokeOpacity="0.12"
          strokeWidth="0.35"
          transform="translate(4 6)"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-2 p-3 sm:p-4">
        <span className="label-caps text-bone/80">{label}</span>
        <span className="label-caps shrink-0 border border-gold/50 px-2 py-1 text-[0.6rem] text-gold">
          Provisório
        </span>
      </div>
    </div>
  );
}
