import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import PostsScreen from './src/screens/PostsScreen';
import { requestUserPermission, listenForNotifications } from './src/services/notifications';

const App: React.FC = () => {
  useEffect(() => {
    requestUserPermission();
    listenForNotifications();
  }, []);

  return (
    <Provider store={store}>
      <PostsScreen />
    </Provider>
  );
};

export default App;
