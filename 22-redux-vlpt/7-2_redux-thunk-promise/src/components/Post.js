function Post({ post }) {
const { title, content } = post;

return (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
}

export default Post;