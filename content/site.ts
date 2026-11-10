/**
 * CONTEÚDO EDITÁVEL DO SITE
 * -------------------------------------------------------------
 * Tudo o que aparece na página sai deste arquivo.
 * Itens marcados com "CONFIRMAR" ainda dependem do Vit.
 * Nenhum dado aqui foi inventado: campo vazio = dado não confirmado.
 */

/**
 * Modo demonstração: exibe a faixa "conceito / proposta", os avisos
 * "a confirmar" e impede indexação por buscadores.
 * Mude para `false` somente quando o site for aprovado pelo estúdio.
 */
export const DEMO_MODE = true;

export const studio = {
  handle: "_studiovit",
  displayName: "Vit",
  tagline: "Estúdio de tatuagem em Cristo Rei",
  instagramUrl: "https://www.instagram.com/_studiovit/",
};

/**
 * WHATSAPP
 * Preencha UM dos dois campos:
 *  - `number`: somente dígitos, com DDI e DDD. Ex.: "5511999999999"
 *  - `link`: link pronto do WhatsApp (o mesmo usado no Instagram),
 *            ex.: "https://wa.me/message/XXXXXXXX"
 * Enquanto os dois estiverem vazios, os botões de contato apontam
 * para o Instagram, com o rótulo correspondente.
 */
export const whatsapp = {
  number: "5511993758949",
  link: "",
  /**
   * Mensagem que já chega escrita no WhatsApp de quem clica.
   * A pessoa só completa os campos e envia. Cada item da lista vira uma linha.
   */
  message: [
    "Olá, Vit! Vim pelo site e quero um orçamento de tatuagem.",
    "",
    "Ideia ou referência: ",
    "Tamanho aproximado (cm): ",
    "Local do corpo: ",
    "Colorida ou preto e cinza: ",
    "",
    "Posso mandar fotos de referência em seguida.",
  ].join("\n"),
};

export const address = {
  street: "Rua Oscar Nelson, 172",
  district: "Cristo Rei",
  /** CONFIRMAR: cidade/UF e CEP. Quando preenchidos, entram no endereço e na rota. */
  city: "",
  postalCode: "",
};

/** CONFIRMAR: horário de funcionamento. Vazio = a linha não aparece. */
export const openingHours = "";

export const hero = {
  eyebrow: studio.tagline,
  titleLines: ["Traço", "que fica."],
  text: "Tatuagens feitas pelo Vit, no estúdio em Cristo Rei. Chame para tirar dúvidas, contar sua ideia e pedir um orçamento.",
  /** Foto do hero. Vazio = espaço reservado. */
  image: {
    src: "/trabalhos/mao-esqueleto-rosa.webp",
    alt: "Tatuagem em preto no dorso da mão: ossos do esqueleto desenhados sobre os dedos e uma rosa no pulso",
  },
};

/**
 * SOBRE — CONFIRMAR
 * Texto neutro, sem biografia, tempo de carreira ou especialidades.
 * Substituir pelo texto aprovado pelo Vit.
 */
export const about = {
  title: "Vit, no estúdio",
  paragraphs: [
    "O _studiovit é o estúdio de tatuagem do Vit, em Cristo Rei. O atendimento começa por uma conversa: você conta a ideia, o tamanho e o lugar do corpo, e combina os detalhes direto com ele.",
    "Os trabalhos mais recentes ficam no Instagram do estúdio, que mostra tatuagens em diferentes estilos.",
  ],
  image: {
    src: "/estudio/atendimento.webp",
    alt: "Interior do estúdio: tatuador de costas, sentado junto à maca, atendendo uma cliente",
  },
  pending: [
    "Texto de apresentação aprovado pelo Vit",
    "Estilos que ele quer destacar",
    "Autorização da cliente que aparece na foto do estúdio",
  ],
};

/**
 * GALERIA
 * Use somente fotos autorizadas pelo Vit.
 * 1. Salve a foto em /public/trabalhos (WebP, até ~1600px no lado maior).
 * 2. Preencha `src` (ex.: "/trabalhos/01.webp") e um `alt` que descreva a tatuagem.
 * Enquanto `src` estiver vazio, aparece um espaço reservado identificado.
 * `ratio` define o formato do quadro (largura / altura).
 */
export type Work = { src: string; alt: string; ratio: "4/5" | "1/1" | "3/4" | "4/3" };

export const works: Work[] = [
  {
    src: "/trabalhos/pernas-linha-vermelha.webp",
    alt: "Duas tatuagens em linha vermelha nas pernas: um rosto feminino com chifres e correntes, e uma caveira de animal",
    ratio: "3/4",
  },
  {
    src: "/trabalhos/casal-esqueletos.webp",
    alt: "Par de tatuagens combinando nos antebraços: dois esqueletos abraçados em um caixão, com faixas escritas em inglês",
    ratio: "1/1",
  },
  {
    src: "/trabalhos/adaga-perna.webp",
    alt: "Tatuagem em preto de uma adaga ornamentada, da coxa até a panturrilha, na parte de trás da perna",
    ratio: "3/4",
  },
];

/* ---------- Derivados (não precisa editar) ---------- */

export const fullAddress = [address.street, address.district, address.city, address.postalCode]
  .filter(Boolean)
  .join(", ");

export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

const whatsappUrl = whatsapp.number
  ? `https://wa.me/${whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(whatsapp.message)}`
  : whatsapp.link;

/** Contato principal: WhatsApp quando configurado; Instagram enquanto não estiver. */
export const contact = whatsappUrl
  ? { channel: "whatsapp" as const, url: whatsappUrl, label: "Conversar no WhatsApp", short: "WhatsApp" }
  : { channel: "instagram" as const, url: studio.instagramUrl, label: "Chamar no Instagram", short: "Instagram" };
