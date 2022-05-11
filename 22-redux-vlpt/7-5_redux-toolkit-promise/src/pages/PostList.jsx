import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../features/posts/postsSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background-color: #ebedef;
`;

const StyledLi = styled.li`
  margin: 0.5rem 0;
  padding: 0;
`;

const StyledP = styled.p`
  margin: 0 1rem 0;
`;

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);
  const dispatch = useDispatch();

  const getPosts = (e) => {
    if (posts.length === 21) {
      alert("불러올 게시물이 없습니다.");
    } else {
      dispatch(fetchPosts());
    }
  };

  return (
    <div>
      <button onClick={getPosts}>DISPATCH</button>
      <StyledUl>
        <StyledH3>status and error</StyledH3>
        <li>{`posts status: ${postsStatus}`}</li>
        <li>{`posts error: ${postsError}`}</li>
      </StyledUl>
      <StyledUl>
        <StyledH3>posts</StyledH3>
        {posts.map(({ id, username, title }) => {
          return (
            <StyledLi key={id}>
              <StyledH4>
                {`${id}`}
                <Link to={`${id}`}>{`${title}`}</Link>
              </StyledH4>
              <StyledP>{username}</StyledP>
            </StyledLi>
          );
        })}
      </StyledUl>
    </div>
  );
};

export default PostsList;
