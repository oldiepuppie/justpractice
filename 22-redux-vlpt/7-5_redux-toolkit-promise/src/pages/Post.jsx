import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPost, fetchPostById } from "../features/posts/postSlice";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GrayBackgroundSpan = styled.span`
  background-color: #ebedef;
`;
const FontSizeDecreasedSpan = styled.span`
  margin-left: 1rem;
  font-size: 0.7em;
`;

const Post = () => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [id, dispatch]);

  return (
    <div>
      <h2>post</h2>
      <h3>
        <GrayBackgroundSpan>{`${post.title}`}</GrayBackgroundSpan>
        <FontSizeDecreasedSpan>{`${post.username}`}</FontSizeDecreasedSpan>
      </h3>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
