import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Input from 'react-native-input-style';

export default function SignUp({ navigation}) {
  const YOUR_InputChangeHandler = () => {
    alert('hii bro');
  };
  const onPress = () => {
    // alert('hii bro');
   navigation.navigate('test');
  };
  const isSignup = true;
  const authHandler = true;

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
            {/* <TextInput style={styles.input} value="name"/>
            <TextInput style={styles.input} value="email" />
            <TextInput style={styles.input} value="password"/>
            <TextInput style={styles.input} value="user name"/> */}
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
              <Input
                onlyEnglish
                id="email"
                label="Email"
                keyboardType="default"
                email="true"
                required
                contain=" "
                autoCapitalize="sentences"
                errorText="Your name is invalid"
                onInputChange={YOUR_InputChangeHandler}
                initialValue=""
                outlined
                borderColor="#FFB100"
              />
              <Input
                id="password"
                label="password"
                keyboardType="default"
                secureTextEntry
                required
                submit={!isSignup && authHandler}
                minLength={6}
                maxLength={20}
                autoCapitalize="none"
                errorText="Your password is invalid"
                onInputChange={YOUR_InputChangeHandler}
                initialValue=""
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
                onInputChange={YOUR_InputChangeHandler}
                initialValue=""
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
                onInputChange={YOUR_InputChangeHandler}
                initialValue=""
                outlined
                borderColor="#FFB100"
              />
              <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={{color: 'white', fontSize: 18}}>Sign Up</Text>
              </TouchableOpacity>
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
