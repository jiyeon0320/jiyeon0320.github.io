import './App.css'
import { Route, Routes } from 'react-router-dom'
import PostListPage from './pages/PostList/PostListPage'
import PostPreview from './pages/PostPreview'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PostPreview />}
      />
      <Route
        path="/posts"
        element={<PostListPage />}
      />
      <Route
        path="/posts/:slug"
        element={<PostListPage />}
      />
      <Route
        path="/about"
        element={<PostListPage />}
      />
    </Routes>
  )
}

export default App
