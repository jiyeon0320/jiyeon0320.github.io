import type { Post } from '@/types/post'

const blogFiles = import.meta.glob('/content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data: Record<string, string> = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    value = value.replace(/^["']|["']$/g, '')
    data[key] = value
  }

  return { data, content: match[2] }
}

function parseTags(value?: string): string[] {
  if (!value) return []
  return value
    .replace(/^\[|\]$/g, '')
    .split(',')
    .map((t) => t.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean)
}

function parsePost(raw: string, filePath: string): Post {
  const { data, content } = parseFrontmatter(raw)

  const fileName = filePath.split('/').pop()?.replace('.md', '') ?? ''
  const slug = data.slug?.replace(/^\//, '') || fileName

  return {
    title: data.title || 'Untitled',
    date: data.date || '',
    slug,
    tags: parseTags(data.tags),
    summary: data.summary || '',
    content
  }
}

export function getAllPosts(): Post[] {
  return Object.entries(blogFiles)
    .map(([path, raw]) => parsePost(raw, path))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug)
}
