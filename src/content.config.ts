import { defineCollection } from 'astro:content'
import { z } from 'astro:schema'
import { glob } from 'astro/loaders'

// 블로그 글: src/content/blog/*.md
// frontmatter 규칙은 OBSIDIAN.md 와 동일하게 유지한다.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional()
  })
})

export const collections = { blog }
