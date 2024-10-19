import axios from 'axios';
import { Post } from '../store/posts/types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPostsAPI = async (page: number): Promise<Post[]> => {
  const response = await axios.get(`${BASE_URL}/posts?_page=${page}`);
  return response.data;
};
