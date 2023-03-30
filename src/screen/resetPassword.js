import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ResetPassword({navigation}) {
  const [code, setCode] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [checkPasswordValidation, setPasswordValidation] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  function validationHandler() {
    validatePassword(resetPassword);
  }

  const validatePassword = resetPassword => {

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[{\]};:<>|./?,-])(?=.*[^\da-zA-Z]).{8,}$/;
    console.log(resetPassword);
    if (passwordRegex.test(resetPassword)) {
      // setPasswordValidation(true);
      navigation.navigate('home');
      return;
    } else {
      // setPasswordValidation(false);
      console.log('not');
      setPasswordValidation('');
      setErrorMsg('weak password');
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
            Reset Password
          </Text>
          <Text style={{fontSize: 15}}>
            Enter confirmation code and new password for your account below.
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
            placeholder="Enter your confirmation code"
            value={code}
            setValue={setCode}
            secure={false}
            type="numeric"
            length={4}
          />
          <CustomInput
            placeholder="Enter new password"
            value={resetPassword}
            setValue={setResetPassword}
            secure={true}
          />
          {checkPasswordValidation ? null : (
            <Text style={{color: 'red', marginLeft: 150}}>{errorMsg}</Text>
          )}
          <KeyboardAvoidingView>
            <CustomButton
              title="Submit"
              onPress={() => {
                validationHandler();
              }}
            />
            <CustomButton
              title="Resend code"
              onPress={() => {
                navigation.navigate('home');
              }}
            />
            <CustomButton
              title="Sign In"
              onPress={() => {
                navigation.navigate('signIn');
              }}
            />
          </KeyboardAvoidingView>
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
