import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import PostCard from './PostCard';

const FlatListHandler: React.FC<{
  data: {id: number; title: string; body: string}[];
  onLoadMore: () => void;
  onRefresh: () => void;
  refreshing: boolean;
}> = ({data, onLoadMore, onRefresh, refreshing}) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => `${item.id}-${index}`}
    renderItem={({item}) => <PostCard title={item.title} body={item.body} />}
    onEndReached={onLoadMore}
    initialNumToRender={10}
    onEndReachedThreshold={0.5}
    windowSize={5}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }
    removeClippedSubviews={true}
  />
);

export default FlatListHandler;
