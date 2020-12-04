import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button 
} from 'react-native';
import auth from '@react-native-firebase/auth';

class home extends Component {
    constructor() {
        super();
        this.state = {
            uid: ''
        }
    }
    signOut = () => {
        auth().signOut().then(() => {
            this.props.navigation.navigate('Signup')
        })
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        this.state = {
            displayName: auth().currentUser.displayName,
            uid: auth().currentUser.uid
        }
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Hello, {this.state.displayName}
                </Text>

                <Button
                    color="skyblue"
                    title="Logout"
                    onPress={() => this.signOut()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        backgroundColor: 'whitesmoke'
    },
    textStyle: {
        fontSize: 17,
        marginBottom: 23
    }
});

export default home;