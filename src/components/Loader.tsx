import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Loader: React.FC = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator size="large" />
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
