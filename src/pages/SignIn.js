import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {Logo} from '../assets';
import {colors, fonts, useForm} from '../utils';
import {Button, Gap, Input} from '../components';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const signInPressed = () => {
    auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        navigation.navigate('MainApp');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerWrapper}>
        <Logo />
        <Text style={styles.desc}>Masuk dan mulai berkonsultasi</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Input
            title="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            title="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
        </View>
        <View>
          <Button title="Sign In" onPress={signInPressed} />
          <Button
            type="tertiary"
            title="Create New Account"
            onPress={() => navigation.replace('SignUp')}
          />
          <Button type="tertiary" title="Forgot My Password" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
  containerWrapper: {
    padding: 40,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  desc: {
    fontFamily: fonts[600],
    color: colors.primary_font,
    fontSize: 24,
    marginTop: 40,
    marginBottom: 40,
  },
});
