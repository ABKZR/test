import React from 'react';
import { View, Text, Button } from 'react-native';

const ErrorView: React.FC<{ onRetry: () => void }> = ({ onRetry }) => (
  <View>
    <Text>Error fetching data</Text>
    <Button title="Retry" onPress={onRetry} />
  </View>
);

export default ErrorView;
