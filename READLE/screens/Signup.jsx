import React from 'react';
import {StyleSheet,View,Image,ScrollView,Text,TouchableOpacity,} from 'react-native';
import Constants from 'expo-constants';
import BlockAlert from '../components/BlockAlert';
import BlockButton from '../components/BlockButton';
import FormInputField from '../components/FormInputField';
import illustration from '../assets/Image/Signup.png';
import useTheme from '../hooks/useTheme';


const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const [showPass, setShowPass] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);

  const handlerSignup = () => {
    if (confirmPass !== password || email === '' || password === '') {
      setShowAlert(true);
    } else {
      navigation.navigate('Main');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{
        padding: 24,
        paddingTop: Constants.statusBarHeight,
      }}
      >
        <View style={styles.centered}>
          <Image
            style={[styles.illustration, { marginTop: 24 }]}
            source={illustration}
          />
        </View>
        <View style={{ marginTop: 32, marginBottom: 16 }}>
          <Text style={styles.head}>Join with us</Text>
        </View>
        {showAlert ? (
          <BlockAlert
            bgColor={palette.error.main}
            textColor={palette.common.white}
            message="Email and password cannot be empty, confirm password and password should match"
          />
        ) : null}
        <View>
          <FormInputField
            state={email}
            setState={setEmail}
            options={{
              keyboardType: 'email-address',
              placeholder: 'Email',
            }}
          />
          <FormInputField
            state={password}
            setState={setPassword}
            options={{
              placeholder: 'Password',
              secureTextEntry: !showPass,
            }}
          />
          <FormInputField
            state={confirmPass}
            setState={setConfirmPass}
            options={{
              placeholder: 'Confirm password',
              secureTextEntry: !showPass,
            }}
          />
        </View>
        <TouchableOpacity
          style={{ marginBottom: 24 }}
          onPress={() => setShowPass(!showPass)}
        >
          <Text style={{ color: palette.text.secondary }}>
            {showPass ? 'Hide' : 'Show'}
            {' '}
            password
          </Text>
        </TouchableOpacity>
        <BlockButton
          label="Sign up"
          bgColor={palette.primary.main}
          textColor={palette.common.white}
          onPress={handlerSignup}
        />
      </View>
    </ScrollView>
  );
};

const { palette, typography } = useTheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.common.white,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustration: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
  head: {
    fontWeight: 'bold',
    fontSize: typography.size.xl,
  },
});

export default SignupScreen;
