import {
    PostsState,
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    PostsActionTypes,
  } from './types';
  
  const initialState: PostsState = {
    data: [],
    status: 'idle',
    page: 1,
  };
  
  const postsReducer = (state = initialState, action: PostsActionTypes): PostsState => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return { ...state, status: 'loading' };
      case FETCH_POSTS_SUCCESS:
        return { ...state, data: [...state.data, ...action.payload], status: 'succeeded' };
      case FETCH_POSTS_FAILURE:
        return { ...state, status: 'failed' };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  