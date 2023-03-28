import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Input from 'react-native-input-style';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import {ScrollView} from 'react-native-gesture-handler';
export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [confirmPassword, setConfirmPassWord] = useState('');

  const [checkEmailValidation, setCheckEmailValidation] = useState(true);
  const [checkPasswordValidation, setPasswordValidation] = useState(true);
  const [errorMsg, setErrorMsg] = useState(''); //password error message

  //  <--------------------validation------------------------>

  function validationHandler() {
    handleEmailValidation();
    validatePassword(password, confirmPassword);
  }
  const handleEmailValidation = () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setCheckEmailValidation(true);
      return;
    }
    setCheckEmailValidation(false);
    return;
  };
  const validatePassword = (password, confirmPassword) => {
    let check = password.match(confirmPassword);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (check != null) {
      if (passwordRegex.test(password)) {
        setPasswordValidation(true);
        return;
      } else {
        setPasswordValidation(false);
        setErrorMsg('weak password');
        return;
      }
    } else {
      setPasswordValidation(false);
      setErrorMsg('password did not match');
      console.log(errorMsg);
      return;
    }
  };

  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flex: 0.3,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#1A120B',
                marginBottom: 15,
              }}>
              Sign Up!
            </Text>
            <Text style={{fontSize: 15}}>
              Welcome to our sign-up page! We're excited to have you join our
              community.
            </Text>
          </View>
        </View>

        <View style={{flex: 0.7, backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
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
                placeholder="Username"
                value={userName}
                setValue={setUserName}
                secure={false}
              />
              <CustomInput
                placeholder="Email"
                value={email}
                setValue={setEmail}
                secure={false}
                type="email-address"
              />
              {checkEmailValidation ? null : (
                <Text style={{color: 'red', marginLeft: 150}}>
                  invalid email
                </Text>
              )}
              <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secure={true}
              />
              <CustomInput
                placeholder="Password"
                value={confirmPassword}
                setValue={setConfirmPassWord}
                secure={true}
              />
              {checkPasswordValidation ? null : (
                <Text style={{color: 'red', marginLeft: 150}}>{errorMsg}</Text>
              )}
              <CustomButton
                title="Sign-Up"
                onPress={() => {
                  validationHandler();
                  // alert('button clicked');
                }}
              />
              <CustomButton
                title="Sign-In"
                onPress={() => {
                  navigation.navigate('signIn');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'red', width: '100%', height: '100%'},
  topContainer: {flex: 0.4, backgroundColor: 'white'},
  bottomContainer: {backgroundColor: 'yellow'},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFB100',
    padding: 10,
    borderRadius: 30,
    width: 300,
    marginTop: 10,
  },
  shadowProp: {
    shadowOffset: {width: -3, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 40,
  },
});

{
  /* <Input
                onlyEnglish
                id="email"
                label="Email"
                keyboardType="default"
                email="true"
                required
                contain=" "
                autoCapitalize="sentences"
                errorText="Your name is invalid"
                onInputChange={setValue}
                initialValue={value}
                outlined
                borderColor="#FFB100"
              />
              <Input
                id="password"
                label="password"
                keyboardType="default"
                secureTextEntry
                required
                // submit={!isSignup && authHandler}
                minLength={6}
                maxLength={20}
                autoCapitalize="none"
                errorText="Your password is invalid"
                onInputChange={setValue}
                initialValue={value}
                outlined
                borderColor="#FFB100"
              />
              <Input
                onlyEnglish
                id="userName"
                label="User Name"
                keyboardType="default"
                required
                contain=" "
                autoCapitalize="sentences"
                onInputChange={setValue}
                initialValue={value}
                outlined
                borderColor="#FFB100"
              />
              <Input
                onlyEnglish
                id="name"
                label="Full Name"
                keyboardType="default"
                required
                contain=" "
                autoCapitalize="sentences"
                errorText="Your name is invalid"
                onInputChange={setValue}
                initialValue={value}
                outlined
                borderColor="#FFB100"
              /> */
}
