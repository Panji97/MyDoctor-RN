import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {Logo} from '../assets';
import {colors, fonts} from '../utils';
import {Button, Gap, Input} from '../components';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerWrapper}>
        <Logo />
        <Text style={styles.desc}>Masuk dan mulai berkonsultasi</Text>
      </View>
      <View style={styles.content}>
        <View>
          <Input title="Email Address" />
          <Gap height={24} />
          <Input title="Password" />
          <Gap height={40} />
        </View>
        <View>
          <Button
            title="Sign In"
            onPress={() => navigation.replace('MainApp')}
          />
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
