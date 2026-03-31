import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
      {content}
    </Markdown>
  )
}
