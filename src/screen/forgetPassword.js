import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignIn from './signIn';
import ResetPassword from './resetPassword';
export default function ForgetPassword({navigation}) {
  const [email, setEmail] = useState('');
  const [checkEmailValidation, setCheckEmailValidation] = useState(true);
  function validationHandler() {
    handleEmailValidation();
  }
  const handleEmailValidation = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setCheckEmailValidation(true);
      navigation.navigate('resetPassword');
      return;
    } else {
      setCheckEmailValidation(false);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.body}>
      <View
        style={{flex: 0.3, backgroundColor: 'white', justifyContent: 'center'}}>
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#1A120B',
              marginBottom: 15,
            }}>
            Forget Password
          </Text>
          <Text style={{fontSize: 15, color: '#1A120B'}}>
            Enter the email address associated with your account below to
            receive a password reset code.
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.7,
          backgroundColor: '#FFB100',
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <View
          style={[
            {
              backgroundColor: 'white',
              marginTop: 70,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 30,
              padding: 20,
              alignItems: 'center',
            },
            styles.shadowProp,
          ]}>
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
            secure={false}
            type="email-address"
          />
          {checkEmailValidation ? null : (
            <Text style={{color: 'red', marginLeft: 150}}>invalid email</Text>
          )}
          <CustomButton
            title="Send"
            onPress={() => {
              validationHandler();
            }}
          />
          <CustomButton
            title="Sign In"
            onPress={() => {
              navigation.navigate('signIn');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowOffset: {width: -3, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 40,
  },
});
