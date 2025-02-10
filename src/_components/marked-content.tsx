import { marked } from "marked";

export function MarkedContent({ content }: { content: string }) {
  return (
    <div
      className="marked"
      dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
    />
  );
}
