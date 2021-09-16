//App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settingView}>

          <Text style={styles.lodaingText}>
           안녕 채현아~~~ app 만들기 성공!
          </Text>

        </View>
        <View style={styles.ddayView}>
          <Image
              style={styles.imagesize}
              source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
            />

        </View>
        <View style={styles.chatView}>

        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    settingView: {
      flex: 1,
      backgroundColor: 'white',
    },
    ddayView: {
      flex: 7,
      backgroundColor: 'green',
    },
    chatView: {
      flex: 7,
      backgroundColor: 'blue',
    },
    lodaingText: {
      fontSize : 25,
    },
    imagesize : {
      width : 40,
      height : 40,
    }
});