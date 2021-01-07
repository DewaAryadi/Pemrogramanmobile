import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput, Alert,
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#DCDCDC",
    borderRadius: 0,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
  },
  loginbutton: {
    backgroundColor: "#8B0000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 100,
    marginLeft: 100,
  },
});

  const SignupScreen = ({ navigation }) => {
  const [email, setEmail]= React.useState('');
  const [password, setPassword]= React.useState('');
  const [confirmPass, setConfirmPass]= React.useState('');

  const AuthSignup = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCom8J5I-P8M8Qou2f2vpaGpChuQZdmOiw", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            confirmPass: confirmPass,
            returnSecureToken: true
        })
    })
    const resData = await response.json()
    if (response.ok){
      await navigation.navigate('Login')
  } else {
      Alert.alert ('An Error Occured!', resData.error.message, [{
          text: 'Okay'
      }])
  }
  }

  // const handlerLogin = () => {
  //   navigation.navigate('Tab');
  // };

  return (

    <ScrollView style={styles.container}>
      <View style={{paddingTop: 100}} >

        <View >
          <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 40, textAlign: "center" }}>Buat Akun</Text>
        </View>

        <View>
        <TextInput
            style={styles.inputView}
            value={email}
            // onChangeText={setEmail}
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text)
            }}
            
          />
        <TextInput
            style={styles.inputView}
            value={password}
            // on ChangeText={setPassword}
            placeholder="Password"
            onChangeText={(text) => {
              setPassword(text)
            }}
            
            secureTextEntry
        
          />
        <TextInput
            style={styles.inputView}
            value={confirmPass}
            // on ChangeText={setConfirmPass}
            placeholder="Confirm Password"
            onChangeText={(text) => {
              setConfirmPass(text)
            }}
           
            secureTextEntry
          
          />
        </View>

        <TouchableOpacity
            style={styles.loginbutton}
            onPress={AuthSignup}
          >
            <Text style={{ 
              color:"#fff",
               }}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
