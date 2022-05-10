import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import styled from "styled-components";

const StyledUl = styled.ul`
  margin: 2rem 0;
  padding: 0;
`;

const StyledH3 = styled.h3`
  margin: 0;
  padding: 0;
`;

const StyledH4 = styled.h4`
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  margin: 0.5rem 0;
  padding: 0;
`;

const StyledP = styled.p`
  margin: 0 1rem 0;
`;

const StyledSpan = styled.span`
  background-color: #ebedef;
`;

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const dispatch = useDispatch();

  const getPosts = (e) => {
    if (posts.length === 21) {
      alert("All the posts have loaded.");
    } else {
      dispatch(fetchPosts());
    }
  };

  return (
    <div>
      <h2>posts list</h2>
      <button onClick={getPosts}>DISPATCH</button>
      <StyledUl>
        <StyledH3>status and error</StyledH3>
        <li>{`posts status: ${postsStatus}`}</li>
        <li>{`posts error: ${postsError}`}</li>
      </StyledUl>
      <StyledUl>
        <StyledH3>posts</StyledH3>
        {posts.map(({ id, username, title, content }) => {
          return (
            <StyledLi key={id}>
              <StyledH4>
                {`${id}`} <StyledSpan>{`${title}`}</StyledSpan>
              </StyledH4>
              <StyledP>{username}</StyledP>
              <StyledP>{content}</StyledP>
            </StyledLi>
          );
        })}
      </StyledUl>
    </div>
  );
};

export default PostsList;
