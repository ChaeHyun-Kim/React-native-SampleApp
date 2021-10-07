
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
        <ScrollView>
          <Text style={styles.MText}>{"\n"}보장분석서비스, 회원만을 위한 컨텐츠 제공 등 위해 필요한 최소한의 개인정보를 수집하고 있습니다. 이에 개인정보의 수집 및 이용에 관하여 아래와 같이 고지하오니 충분히 읽어보신 후 동의하여 주시기 바랍니다.{"\n"}
1. 수집 및 이용목적{"\n"}
·APP 회원가입, 서비스 이용시 본인의 확인{"\n"}
·각종고지 · 통지, 고충처리, 분쟁조정을 위한 기록 보존{"\n"}
2. 수집 및 이용하는 개인정보 항목{"\n"}
APP 회원가입{"\n"}
·성명, 생년월일, 연락처{"\n"}
APP 서비스 관련{"\n"}
·보험계약정보{"\n"}
·APP 접속 정보 및 서비스 이용정보{"\n"}
3. 수집방법{"\n"}
·실명확인을 위하여 마련된 핸드폰에 직접 입력하는 방식{"\n"}
·APP에 마련된 회원가입란 및 보험계약 정보 입력란에 회원 본인이 직접 입력하는 방식{"\n"}
·생성정보 수집 툴을 통한 수집{"\n"}
4. 보유 및 이용기간{"\n"}
이용자가 회원탈회를 요청하거나 개인정보의 수집·이용 등에 대한 동의를 철회할 때까지 보유·이용합니다. 다만, 다음의 정보에 대해서는 아래의 이유로 예외로 합니다.{"\n"}
·기타 법률에 의해 이용자의 개인정보를 보존해야 할 필요가 있는 경우에는 해당 법률의 규정에 따릅니다.{"\n"}
·정보통신망 이용촉진 및 정보보 등에 관한 법률에 따라 APP을 대통령령으로 정하는 기간동안 로그인하지 아니하는 이용자의 개인정보를 보호하기 위하여 개인정보 파기 등 필요한 조치를 취합니다. APP 회원은 1년간 미로그인시 회원정보 삭제 또는 분리보관 및 탈퇴 또는 이용정지처리가 됩니다. 이용자의 요엋ㅇ에 따라 달리 정한 경우가 있을 경우, 달리 정한 기간을 적용할 수 있습니다.{"\n"}</Text>
        </ScrollView>
          
      </View>

        
      <View style={styles.chatControl}>

        <TouchableOpacity style={styles.sendButton}
          activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("signup4");
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