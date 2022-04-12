import PostContainer from '../containers/PostContainer';

function PostPage({ match }) {
  // FIXME
  const { id } = match.params;

  return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostPage;