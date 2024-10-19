import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/posts/actions';
import { RootState } from '../store';

const usePosts = () => {
  const dispatch = useDispatch();
  const { data, status, page } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      fetchPosts(page)(dispatch);
    }
  }, [status, page, dispatch]);

  const loadMore = () => fetchPosts(page + 1)(dispatch);
  const handleRefresh = () => fetchPosts(1)(dispatch);

  return { data, status, loadMore, handleRefresh };
};

export default usePosts;
