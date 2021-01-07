import React from 'react';
import {
  StyleSheet, View, Text, ScrollView, Image
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },

});

const ProfileScreen = () => {
  return (
  <View style={styles.container}>
      
    <View>
      <Image source={require('./../../assets/foto/game-console.png')} style={{alignItems:"center", 
      width: 200,
      height: 200,
      marginLeft:100,
      marginTop:100,
    }}/>
    </View>

    <View>
    <Text style={{textAlign:"center", fontSize:15, marginTop:20, paddingTop:100, fontWeight:"500"}}>
      Username: DMA
    
    </Text>
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"500"}}>
      Game ID : 163299800(2243)
    </Text>
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"500"}}>
      Email : bsand8814@gmail.com
    </Text>
  </View>
  </View>
  
  );
};
export default ProfileScreen;