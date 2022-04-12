import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";
import Post from "../components/Post";

function PostContainer({ postId }) {
  const { data, loading, error } = useSelector((state) => state.posts.post);
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  return (
    <div>
      <h2>Post Container</h2>
      {loading ? (
        <div>...로딩중</div>
      ) : error ? (
        <div>에러 발생!</div>
      ) : !data ? null : (
        <Post post={data} />
      )}
    </div>
  );
}

export default PostContainer;
