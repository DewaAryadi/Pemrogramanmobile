import React from 'react';
import {
  StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  inputView: {
    width: "80%",
    backgroundColor: "lightgrey",
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
  },
  loginbutton: {
    backgroundColor: "lightgreen",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 30,
  },

});

  const LoginScreen = ({ navigation }) => {
  const [email, setEmail]= React.useState('');
  const [password, setPassword]= React.useState('');
  const AuthLogin = async () => {
    const response = await fetch ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCom8J5I-P8M8Qou2f2vpaGpChuQZdmOiw", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      })
    })
    const resData = await response.json()
    // console.log (resData)
    if (response.ok){
      await navigation.navigate('Tab')
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
      <View style={{ paddingTop: 120 }}>

        <Text style={{ fontSize: 60, fontWeight: 'bold', marginBottom: 30, textAlign: "center" }}>Sign In</Text>

        <View>
          <TextInput style={styles.inputView}
            value={email}
            // onChangeText={setUsername}
            placeholder="Username"
            onChangeText= {(text) => {
              setEmail(text)
            }}
          />
          <TextInput style={styles.inputView}
            value={password}
            // onChangeText={setPassword}
            placeholder="Password"
            onChangeText= {(text) => {
              setPassword(text)
            }}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={AuthLogin}
          >
            <Text style={{
              color: "white",
            }}>Login</Text>
          </TouchableOpacity>

          <View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={{ color: "black", textAlign: "center" }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default LoginScreen;
