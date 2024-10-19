import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
};
export const getFCMToken = async () => {
  try {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Device FCM Token:', fcmToken);
    } else {
      console.log('Failed to retrieve FCM token');
    }
  } catch (error) {
    console.log('Error retrieving FCM token:', error);
  }
};


export const listenForNotifications = () => {
  messaging().onMessage(async (remoteMessage) => {
    Alert.alert('New Notification', JSON.stringify(remoteMessage.notification?.title));
  });

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
  });
};
