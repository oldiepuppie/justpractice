import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../components/PostList";
import { getPosts } from "../modules/posts";

function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h2>PostListContainer</h2>
      {loading ? (
        <div>로딩중...</div>
      ) : error ? (
        <div>에러 발생!</div>
      ) : !data ? null : (
        <PostList posts={data} />
      )}
    </div>
  );
}

export default PostListContainer;
