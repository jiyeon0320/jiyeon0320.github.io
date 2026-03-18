import { useEffect } from 'react'
import PostList from './components/PostList'

export default function PostListPage() {
  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
      <PostList />
    </>
  )
}
