import { getPosts, getPostById } from './api/posts';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  getPosts();
  getPostById(3);
  return (
    <div className="App">
      <h1>Posts</h1>
      <Routes>
        <Route path='/' element={<PostListPage />} exact={true} />
        <Route path='/:id' element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
