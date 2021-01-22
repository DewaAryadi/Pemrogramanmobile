import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert, Platform, Button } from 'react-native'

import { DetailLogo } from '../../assets'
import * as ImagePicker from 'expo-image-picker'



// const firebase = require ("firebase")
// require("firebase/firestore")


const Detail = ({ navigation, state }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const upload = () => {
        Fire.shared.addPhoto (image).then(() => {
            setImage(null)
        })
        .catch (err => {
            alert(err.massage)
        })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={{ alignItems: 'center' }}>
                <Image source={DetailLogo} style={{marginTop: 80, width: 100, height: 100, resizeMode: "contain" }} />
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>IMAGINER</Text>
                <Text style={{ fontSize: 16, color: 'gray', marginTop: 2 }}>Share your moments</Text>
                <TextInput
                    style={{
                        marginTop: 40, borderBottomColor: '#ddd',
                        borderBottomWidth: 1, paddingBottom: 10, borderTopColor: '#ddd',
                        borderTopWidth: 1, paddingTop: 10
                    }}
                    placeholder="SearchPhotos"
                />
            </View>

            <Text style={{ fontSize: 25, color: '#000000', textAlign: 'center' }}>Want to upload your photo?</Text>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity onPress={pickImage} style={{
                    width: 150, backgroundColor: '#00C2CB', padding: 10,
                    alignItems: 'center', justifyContent: 'center', borderRadius: 40, marginTop: 30
                }}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Share Image</Text>
                </TouchableOpacity>
                {image && <Image source={{ uri: image }} style={{ width: '100%', height: 300, marginTop: 25 }} 
                onChangeText= {(value) => handleChangeText ("image", value)}/>}
            </View>
        </ScrollView>

    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    inputgrup: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#00C2CB',
        borderRadius: 20,
        marginHorizontal: 30
    }
})
