import React, {useState} from 'react';
import {
  StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from './Firebase'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      marginTop:25  
    },
    inputgrup : {
    width: "80%",
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
    }
  });

const FormScreen = ({navigation}) => {
    const [state, setState] = useState ({
        gamename: "",
        gameid: "",
        email: "",
        nickname: "",
    })
    
    const handleChangeText = (name, value) => {
        setState ({ ...state, [name]: value})
    }
    
    const savecomment = async () => {
        if (state.name === '') {
            alert ('Please provide a name')
        }
        else {
            await firebase.db.collection('users').add({
                gamename: state.gamename,
                gameid: state.gameid,
                email: state.email,
                nickname: state.nickname,
            })
            alert('Saved!')
        }
    }

return (
  <ScrollView style={styles.container}>

<View>
    
    <Text style={{ 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 5, 
        textAlign: "center", 
        paddingTop: 80,
        paddingBottom:100  }}>
        GAMESQUARE </Text>

  </View>


    <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "game name"
                onChangeText= {(value) => handleChangeText ("gamename", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "game id"
                onChangeText= {(value) => handleChangeText ("gameid", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "email"
                onChangeText= {(value) => handleChangeText ("email", value)}
                />
            </View>


      <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "nickname"
                onChangeText= {(value) => handleChangeText ("nickname", value)}
                />
            </View>

            <TouchableOpacity onPress={() => savecomment ()} style={{width: 125, backgroundColor: 'lightgreen', padding: 10,  borderRadius: 40, alignSelf: 'center', marginTop: 20}}>
                <Text style={{ textAlign: 'center', color: 'black', fontSize: 15 }}>Send</Text>
            </TouchableOpacity>

  </ScrollView>

);
}

export default FormScreen;

