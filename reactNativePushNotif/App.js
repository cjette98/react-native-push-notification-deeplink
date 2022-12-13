import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import PushNotification from 'react-native-push-notification'
const App = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token)
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification)
        // process the notification here
      },
      // Android only: GCM or FCM Sender ID
      senderID: '1066974598659',
      popInitialNotification: true,
      requestPermissions: true
    })
  }, [])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})