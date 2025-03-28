import { marked } from 'marked'

export function MarkedContent({ content }: { content: string }) {
  return (
    <div
      className="marked"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
    />
  )
}
