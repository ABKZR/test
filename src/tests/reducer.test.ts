import postsReducer from '../store/posts/reducer';
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  PostsState,
} from '../store/posts/types';

describe('postsReducer', () => {
  it('should handle FETCH_POSTS_REQUEST', () => {
    const initialState = {data: [], status: 'idle' as 'idle', page: 1};
    const action = {type: FETCH_POSTS_REQUEST};
    const expectedState = {data: [], status: 'loading', page: 1};

    expect(postsReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_POSTS_SUCCESS', () => {
    const initialState: PostsState = {data: [], status: 'idle', page: 1};
    const action = {
      type: FETCH_POSTS_SUCCESS,
      payload: [{id: 1, title: 'Test', body: 'Test body'}],
    };
    const expectedState = {
      data: [{id: 1, title: 'Test', body: 'Test body'}],
      status: 'succeeded',
      page: 1,
    };

    expect(postsReducer(initialState, action)).toEqual(expectedState);
  });
});
