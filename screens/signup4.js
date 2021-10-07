
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';



function signup2({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.settingView}>
        <TouchableOpacity>
          <Image 
            style={{width: 10, height: 20}}
            source={require('../icon/arrow.png')}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.titleText}>
          이용약관 동의
        </Text>
      </View>

      <View style={styles.MainView}>
        
          
      </View>

        
      <View style={styles.chatControl}>

        <TouchableOpacity style={styles.sendButton}
          activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("login");
            }}
          >
          <Text style={styles.white}> 다 음 </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}
export default signup2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

    settingView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: 10,
      
    },

    MainView: {
      width:'100%',
      flex : 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
      backgroundColor : '#ECECEC'
    },

    titleText:{
      alignSelf: 'flex-start',
      fontSize: 21,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 10,
    },
    MText:{
      fontSize: 13,
      color: '#000000',
      padding:10,
      
    },

    white:{
      fontSize: 17,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },

    sendButton:{
      backgroundColor: '#7AC819',
      alignItems: 'center',
      justifyContent: 'center',
      width : '100%',
      height : '40%',
    },

    chatControl: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

});