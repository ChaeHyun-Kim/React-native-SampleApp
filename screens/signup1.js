
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, RadioButton } from 'react-native';



function signup1({navigation}) {
    
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
              굿나잇 파킨슨이 처음이시군요.{"\n"}
              <Text style={styles.point}>약관내용에 동의</Text>해주세요.
              </Text>
        </View>
        <View style={styles.marginView}></View>
        <View style={styles.MainView}>

          <View style={styles.group}>
            <Image 
                style={{width: 25, height: 25}}
                source={require('../icon/checkoff.png')}/>
            <Text style={styles.MText}> 약관 전체 동의 </Text>
          </View>
        </View>
        
        <View style={styles.marginView2}></View>

        <Image 
              style={{width: '100%', height: 2}}
              source={require('../icon/line.png')}/>

        <View style={styles.marginView2}></View>




        <View style={styles.MainView}>
          <View style={styles.group}>
            <Image 
                style={{width: 25, height: 25}}
                source={require('../icon/checkoff.png')}/>
            <Text style={styles.SText}> 이용약관 동의 (필수) </Text>
          </View>
          <Image 
              style={styles.icon} 
              source={require('../icon/arrow2.png')}/>
        </View>

        <View style={styles.MainView}>
          <View style={styles.group}> 
            <Image 
                style={{width: 25, height: 25}}
                source={require('../icon/checkoff.png')}/>
            <Text style={styles.SText}> 개인정보 수집 및 이용 동의 (필수) </Text>
          </View> 
          <Image 
              style={styles.icon} 
              source={require('../icon/arrow2.png')}/>
        </View>
        <View style={styles.chatControl}>

          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.white}> 다 음 </Text>
            onPress={() => navigation.navigate("signup2")}
          </TouchableOpacity>
        </View>
      </View>
    
    );
  }

export default signup1;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
    },
    icon: {
      width: 10, 
      height: 20,
      justifyContent: 'flex-end',
      alignSelf: 'center',
    },
    group:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingView: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: 10,
      
    },
    marginView: {
      flex: 8,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    marginView2: {
      marginBottom: 5,
      marginTop:5,
    },
    MainView: {
      width:'100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
    },
    titleText:{
      alignSelf: 'flex-start',
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000000',
      marginBottom: 10,
    },
    MText:{
      fontSize: 21,
      fontWeight: 'bold',
      color: '#1E1E1E',
      marginLeft: 5,
    },
    SText:{
      fontSize: 20,
      justifyContent: 'flex-start',
      color: '#1E1E1E',
      marginLeft: 5,
    },
    point: {
      fontSize: 25,
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      color: '#7AC819',
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