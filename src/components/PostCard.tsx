import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PostCard: React.FC<{title: string; body: string}> = ({title, body}) => (
  <View style={styles.card}>
    <View style={styles.titleRow}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.body}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default PostCard;
