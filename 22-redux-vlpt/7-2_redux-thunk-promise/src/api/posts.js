import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("http://localhost:4000/posts");
  const { data } = res;
  return data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};
