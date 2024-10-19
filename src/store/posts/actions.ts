import { Dispatch } from 'redux';
import { Post, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE, PostsActionTypes } from './types';
import { fetchPostsAPI } from '../../services/apiService';

export const fetchPosts = (page: number) => async (dispatch: Dispatch<PostsActionTypes>) => {
  dispatch({ type: FETCH_POSTS_REQUEST });

  try {
    const data: Post[] = await fetchPostsAPI(page);
    dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE });
  }
};
