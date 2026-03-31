import { useMemo } from 'react'
import { getAllPosts, getPostBySlug } from '@/utils/markdown'
import type { Post } from '@/types/post'

export function usePosts(): Post[] {
  return useMemo(() => getAllPosts(), [])
}

export function usePost(slug: string): Post | undefined {
  return useMemo(() => getPostBySlug(slug), [slug])
}
