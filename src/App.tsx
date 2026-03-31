import './App.css'
import { Route, Routes } from 'react-router-dom'
import PostListPage from './pages/PostList/PostListPage'
import PostPreview from './pages/PostPreview'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostPreview />} />
      <Route path="/list" element={<PostListPage />} />
    </Routes>
  )
}

export default App
