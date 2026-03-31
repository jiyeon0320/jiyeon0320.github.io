import { usePosts } from '@/hooks/usePosts'
import MarkdownRenderer from '@/components/MarkdownRenderer'

export default function PostPreview() {
  const posts = usePosts()

  if (posts.length === 0) {
    return <p>포스트가 없습니다.</p>
  }

  const post = posts[0]

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{post.date}</time>
      {post.tags && post.tags.length > 0 && (
        <div>
          {post.tags.map((tag) => (
            <span key={tag}>#{tag} </span>
          ))}
        </div>
      )}
      <hr />
      <MarkdownRenderer content={post.content} />
    </article>
  )
}
