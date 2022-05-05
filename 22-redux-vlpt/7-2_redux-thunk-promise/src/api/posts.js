import axios from "axios";

export const getPosts = async () => {
  const res = await axios.get("/posts");
  const { data } = res;
  return data;
};

export const getPostById = async (id) => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
