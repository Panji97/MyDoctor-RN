import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../components';
import {colors} from '../utils';

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Create an account"
        onPress={() => navigation.navigate('GetStarted')}
      />
      <Input title="Fullname" />
      <Gap height={24} />
      <Input title="Profession" />
      <Gap height={24} />
      <Input title="Email Address" />
      <Gap height={24} />
      <Input title="Password" />
      <Gap height={40} />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('UploadPhoto')}
      />
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
});
