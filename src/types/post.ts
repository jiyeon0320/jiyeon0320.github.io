export interface PostFrontmatter {
  title: string
  date: string
  slug: string
  tags?: string[]
  summary?: string
}

export interface Post extends PostFrontmatter {
  content: string
}
