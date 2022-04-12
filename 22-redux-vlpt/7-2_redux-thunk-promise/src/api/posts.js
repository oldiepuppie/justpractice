import axios from 'axios';

export const getPosts = async () => {
  const res = await axios.get('https://api.mockaroo.com/api/c9780780?count=20&key=ae081390');
  const { data } = await res;
// console.log(data);
  return data;
}

export const getPostById = async id => {
  const postList = await getPosts();
  // console.log(postList.filter(post => post.id === id));
  return postList.find(post => post.id === id);
}

// TODO remove console.log