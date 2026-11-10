import { ContactButton } from "@/components/ContactButton";
import { Header } from "@/components/Header";
import { Placeholder } from "@/components/Placeholder";
import {
  DEMO_MODE,
  about,
  address,
  contact,
  fullAddress,
  hero,
  mapsUrl,
  openingHours,
  studio,
  studioPhoto,
  works,
} from "@/content/site";

const RATIO_CLASS = {
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
} as const;

function Photo({ src, alt, eager = false }: { src: string; alt: string; eager?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className="h-full w-full object-cover"
    />
  );
}

function SectionHeading({ id, number, label, title }: { id: string; number: string; label: string; title: string }) {
  return (
    <div className="reveal">
      <p className="label-caps flex items-center gap-3 text-gold">
        <span>{number}</span>
        <span aria-hidden="true" className="h-px w-10 bg-bronze" />
        <span>{label}</span>
      </p>
      <h2 id={id} className="display mt-5 text-5xl sm:text-6xl lg:text-7xl">{title}</h2>
    </div>
  );
}

function ExternalLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  );
}

const outlineButton =
  "inline-flex min-h-14 items-center justify-center gap-2 border border-bone/30 px-7 font-semibold transition-colors hover:border-gold hover:text-gold";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-3 focus:font-semibold focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      {DEMO_MODE && (
        <p role="note" className="bg-graphite px-4 py-2 text-center text-xs leading-relaxed text-ash">
          <strong className="font-semibold text-bone">Conceito de site.</strong> Proposta independente para o{" "}
          {studio.handle}, ainda não revisada nem aprovada pelo estúdio. Textos provisórios.
        </p>
      )}

      <Header />

      <main id="conteudo">
        {/* HERO */}
        <section id="topo" className="relative overflow-hidden">
          <div className="container-page grid gap-10 pb-16 pt-10 sm:pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
            <div className="relative z-10 flex flex-col justify-end lg:col-span-7 lg:pb-6">
              <p className="label-caps text-gold">{hero.eyebrow}</p>
              <h1 className="display mt-6 text-[clamp(4.25rem,19vw,8rem)] lg:text-[clamp(6.5rem,10.5vw,9.75rem)]">
                {hero.titleLines.map((line, index) => (
                  <span key={line} className={`block whitespace-nowrap ${index % 2 ? "italic text-gold lg:pl-[0.6em]" : ""}`}>
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-ash">{hero.text}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ContactButton />
                <a href="#trabalhos" className={outlineButton}>
                  Ver trabalhos
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full border border-line lg:aspect-[3/4]">
                {hero.image.src ? (
                  <Photo src={hero.image.src} alt={hero.image.alt} eager />
                ) : (
                  <Placeholder label="Foto do Vit ou do estúdio" index={2} />
                )}
                <span aria-hidden="true" className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-gold" />
              </div>
            </div>
          </div>

          <div className="border-y border-line">
            <dl className="container-page grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="py-5 sm:pr-6">
                <dt className="label-caps text-ash">Estúdio</dt>
                <dd className="mt-1.5">Tatuagem por {studio.displayName}</dd>
              </div>
              <div className="py-5 sm:px-6">
                <dt className="label-caps text-ash">Endereço</dt>
                <dd className="mt-1.5">
                  {address.street}, {address.district}
                </dd>
              </div>
              <div className="py-5 sm:pl-6">
                <dt className="label-caps text-ash">Contato</dt>
                <dd className="mt-1.5">
                  <ExternalLink href={contact.url} className="underline decoration-bronze underline-offset-4 hover:text-gold">
                    {contact.label}
                  </ExternalLink>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* TRABALHOS */}
        <section id="trabalhos" aria-labelledby="trabalhos-titulo" className="py-20 lg:py-28">
          <div className="container-page">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading id="trabalhos-titulo" number="01" label="Trabalhos" title="Na pele" />
              <p className="max-w-sm leading-relaxed text-ash">
                Uma seleção de tatuagens feitas no estúdio. Os trabalhos mais recentes estão no{" "}
                <ExternalLink href={studio.instagramUrl} className="text-bone underline decoration-bronze underline-offset-4 hover:text-gold">
                  Instagram
                </ExternalLink>
                .
              </p>
            </div>

            {DEMO_MODE && works.some((work) => !work.src) && (
              <p className="mt-8 border border-dashed border-bronze/70 p-4 text-sm leading-relaxed text-ash">
                <strong className="text-gold">Imagens provisórias.</strong> Os quadros abaixo são espaços reservados e não
                representam tatuagens do {studio.displayName}. Entram aqui somente fotos autorizadas por ele.
              </p>
            )}

            <ul className="mt-10 columns-2 gap-3 sm:gap-4 md:columns-3 lg:gap-5">
              {works.map((work, index) => (
                <li key={index} className="reveal mb-3 break-inside-avoid sm:mb-4 lg:mb-5">
                  <figure className={`${RATIO_CLASS[work.ratio]} overflow-hidden border border-line`}>
                    {work.src ? (
                      <Photo src={work.src} alt={work.alt} />
                    ) : (
                      <Placeholder label={`Foto ${String(index + 1).padStart(2, "0")}`} index={index} />
                    )}
                  </figure>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ExternalLink href={studio.instagramUrl} className={outlineButton}>
                Ver mais em @{studio.handle}
              </ExternalLink>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" aria-labelledby="sobre-titulo" className="border-y border-line bg-coal py-20 lg:py-28">
          <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] border border-line">
                {about.image.src ? (
                  <Photo src={about.image.src} alt={about.image.alt} />
                ) : (
                  <Placeholder label="Retrato do Vit" index={1} />
                )}
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <SectionHeading id="sobre-titulo" number="02" label="Sobre" title={about.title} />
              <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ash">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {DEMO_MODE && (
                <div className="mt-8 max-w-xl border border-dashed border-bronze/70 p-4 text-sm leading-relaxed text-ash">
                  <p className="font-semibold text-gold">A confirmar com o {studio.displayName}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    {about.pending.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" aria-labelledby="localizacao-titulo" className="py-20 lg:py-28">
          <div className="container-page grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading id="localizacao-titulo" number="03" label="Localização" title="Onde fica" />
              <address className="mt-8 not-italic">
                <p className="font-display text-3xl leading-tight sm:text-4xl">
                  {address.street}
                  <br />
                  <span className="text-gold">{address.district}</span>
                  {address.city && <span>, {address.city}</span>}
                </p>
                {address.postalCode && <p className="mt-3 text-ash">CEP {address.postalCode}</p>}
              </address>
              {openingHours && (
                <p className="mt-6 text-ash">
                  <span className="label-caps mr-3 text-bone">Horário</span>
                  {openingHours}
                </p>
              )}
            </div>
            <div className="lg:col-span-5">
              {studioPhoto.src && (
                <figure className="mb-4">
                  <div className="aspect-[4/3] overflow-hidden border border-line">
                    <Photo src={studioPhoto.src} alt={studioPhoto.alt} />
                  </div>
                  {DEMO_MODE && studioPhoto.pending && (
                    <figcaption className="mt-2 text-xs leading-relaxed text-ash">
                      <span className="text-gold">A confirmar:</span> {studioPhoto.pending}
                    </figcaption>
                  )}
                </figure>
              )}
              <div className="border border-line bg-coal p-6 sm:p-8">
                <p className="leading-relaxed text-ash">
                  Abra a rota no Google Maps a partir de onde você estiver. Antes de ir, combine o horário com o{" "}
                  {studio.displayName}.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <ExternalLink href={mapsUrl} className={`${outlineButton} border-gold text-gold hover:bg-gold hover:text-ink`}>
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                      <circle cx="12" cy="9.5" r="2.5" />
                    </svg>
                    Como chegar
                  </ExternalLink>
                </div>
                <p className="sr-only">Endereço completo: {fullAddress}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAMADA FINAL */}
        <section aria-labelledby="contato-titulo" className="border-t border-line bg-graphite">
          <div className="container-page py-20 text-center lg:py-28">
            <p className="label-caps text-gold">Contato</p>
            <h2 id="contato-titulo" className="display reveal mx-auto mt-6 max-w-4xl text-[clamp(3rem,11vw,7.5rem)]">
              Tem uma ideia? <span className="italic text-gold">Conta pro Vit.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-ash">
              Tire dúvidas e peça um orçamento direto com ele.
            </p>
            <div className="mt-9 flex justify-center">
              <ContactButton className="w-full sm:w-auto" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="container-page flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl italic">
              <span className="text-gold">_</span>studiovit
            </p>
            <p className="mt-2 text-sm text-ash">{studio.tagline}</p>
          </div>
          <ul className="flex flex-col gap-1 text-sm sm:flex-row sm:gap-8">
            <li>
              <ExternalLink href={studio.instagramUrl} className="inline-flex min-h-11 items-center hover:text-gold">
                Instagram
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={mapsUrl} className="inline-flex min-h-11 items-center hover:text-gold">
                {fullAddress}
              </ExternalLink>
            </li>
            {contact.channel === "whatsapp" && (
              <li>
                <ExternalLink href={contact.url} className="inline-flex min-h-11 items-center hover:text-gold">
                  WhatsApp
                </ExternalLink>
              </li>
            )}
          </ul>
        </div>
        {DEMO_MODE && (
          <p className="container-page border-t border-line py-5 text-xs leading-relaxed text-ash">
            Página de demonstração. Conceito independente, sem vínculo comercial com o {studio.handle} até aprovação do
            responsável.
          </p>
        )}
      </footer>
    </>
  );
}
