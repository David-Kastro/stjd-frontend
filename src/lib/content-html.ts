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
