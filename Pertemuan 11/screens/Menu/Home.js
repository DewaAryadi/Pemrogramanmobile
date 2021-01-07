import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:25,
  },
  loginbutton: {
    backgroundColor: "lightgreen",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5,
    marginRight: 45,
    marginLeft: 45,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

      <View>
    
      <Text style={{ 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 5, 
        textAlign: "center", 
        paddingTop: 50  }}>
        GAMESQUARE</Text>
      </View>

      <View >
      <Image source={require('./../../assets/foto/game-console.png')}style={{alignItems:"center", 
      width: 200,
      height: 200,
      marginLeft:100,
      marginTop:30,
      marginBottom:50,
    }}/>
      </View>

      <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Form')}
          >
            <Text style={{
              color: "black",
            }}>DAFTARKAN GAME ANDA</Text> 
          </TouchableOpacity>
        
        </View>


    {/* <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Details')}
          >
            <Text style={{
              color: "black",
            }}> Cara membuat Brownies</Text>
          </TouchableOpacity>
        
        </View>

        <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Details1')}
          >
            <Text style={{
              color: "black",
            }}> Cara membuat Nasi Goreng</Text>
          </TouchableOpacity>
        
        </View>

        <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Details2')}
          >
            <Text style={{
              color: "black",
            }}> Cara membuat Kue Nastar</Text>
          </TouchableOpacity>
        
        </View>
  */}
  </View>
);

export default HomeScreen;
