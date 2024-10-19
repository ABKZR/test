export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  data: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  page: number;
}

interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: Post[];
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
}

export type PostsActionTypes =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;
