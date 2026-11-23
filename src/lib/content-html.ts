import { marked } from 'marked'

/**
 * O campo `corpo` do Strapi passou a ser salvo em HTML (CKEditor). Conteúdo
 * antigo ainda pode chegar em Markdown; neste caso continua passando pelo
 * `marked`. HTML é usado como está, sem reprocessar.
 */
export function contentToHtml(content: string | null | undefined): string {
  if (!content) return ''
  if (/^\s*</.test(content)) return content
  return marked.parse(content, { async: false }) as string
}

/**
 * Versão em texto puro do corpo, para resumos (cards, listas). Remove as
 * tags e os estilos inline que o editor grava, para que o tamanho de fonte
 * ou o alinhamento de um título não vazem para o card.
 */
export function contentToText(content: string | null | undefined): string {
  return contentToHtml(content)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
}
