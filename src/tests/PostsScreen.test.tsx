import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../store';
import PostsScreen from '../screens/PostsScreen';

describe('PostsScreen Snapshot', () => {
  it('renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <PostsScreen />
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
