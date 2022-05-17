import PostContainer from '../containers/PostContainer';
import { useParams } from 'react-router-dom';

function PostPage() {
  // FIXME

  const { id } = useParams();

  return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostPage;