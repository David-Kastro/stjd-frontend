import { contentToHtml } from '@/lib/content-html'

export function MarkedContent({ content }: { content: string }) {
  return (
    <div
      className="marked"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: contentToHtml(content) }}
    />
  )
}
