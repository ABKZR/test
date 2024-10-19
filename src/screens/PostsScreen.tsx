import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import usePosts from '../hooks/usePosts';
import Loader from '../components/Loader';
import FlatListHandler from '../components/FlatListHandler';
import ErrorView from '../components/ErrorView';

const PostsScreen: React.FC = () => {
  const {data, status, loadMore, handleRefresh} = usePosts();

  if (status === 'failed') {
    return <ErrorView onRetry={handleRefresh} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {status === 'loading' && !data.length ? (
          <Loader />
        ) : (
          <FlatListHandler
            data={data}
            onLoadMore={loadMore}
            onRefresh={handleRefresh}
            refreshing={status === 'loading'}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default PostsScreen;
