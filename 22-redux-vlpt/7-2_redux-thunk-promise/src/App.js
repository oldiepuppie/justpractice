import { getPosts, getPostById } from './api/posts';
import PostListContainer from './containers/PostListContainer';

function App() {
  getPosts();
  getPostById(3);
  return (
    <div className="App">
      <h1>Posts</h1>
      <PostListContainer />
    </div>
  );
}

export default App;
