import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
// import firebase from '../../../database/firebase'

const Post3 = ({navigation}) => {
const image = { uri: 'https://cdn.pixabay.com/photo/2021/01/05/07/02/torii-5889982_960_720.jpg'}


    return (
        <ScrollView style={styles.container}>
            <View style={styles.postHeader}>   
                <Image
                    style={styles.imgPerfil}
                    source={image}
                />
                <Text style={styles.username}>
                   Roberto
                </Text>
            </View>

            <ImageBackground
                source={image}
                style={styles.image}
                imageStyle={{width: '100%', height: 300}}>

                <TouchableOpacity style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, position: 'absolute', right: 12, top: 310}}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Download</Text>
                </TouchableOpacity>
            </ImageBackground>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Nickname"
                // onChangeText= {(value) => handleChangeText ("name", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Title"
                // onChangeText= {(value) => handleChangeText ("title", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{margin: 5, marginHorizontal: 15}}
                placeholder= "Comment"
                // onChangeText= {(value) => handleChangeText ("comment", value)}
                />
            </View>

            <TouchableOpacity onPress={() => savecomment ()} style={{width: 125, backgroundColor: '#00C2CB', padding: 10,  borderRadius: 40, alignSelf: 'center', marginTop: 20}}>
                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Send</Text>
            </TouchableOpacity>
            
        </ScrollView>
    )
}

export default Post3

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop: 25
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    imgPerfil: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 10
    },
    username: {
        color: '#000',
        fontWeight: 'bold',
        marginLeft: 10
    },
    postHeader: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputgrup: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#00C2CB',
        borderRadius: 20,
        marginHorizontal: 30
    }
})
