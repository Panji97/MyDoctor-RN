import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {Logo} from '../assets';
import {colors, fonts} from '../utils';
import {Button, Gap, Input} from '../components';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Text style={styles.desc}>Masuk dan mulai berkonsultasi</Text>
      <Input title="Email Address" />
      <Gap height={24} />
      <Input title="Password" />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Button
        type="tertiary"
        title="Create New Account"
        onPress={() => navigation.replace('SignUp')}
      />
      <Button type="tertiary" title="Forgot My Password" />
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
  desc: {
    fontFamily: fonts[600],
    color: colors.primary_font,
    fontSize: 24,
    marginTop: 40,
    marginBottom: 40,
  },
});
