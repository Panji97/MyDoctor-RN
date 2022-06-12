import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../components';
import {colors, storeData, useForm} from '../utils';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import firestore from '@react-native-firebase/firestore';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const continuePressed = () => {
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(response => {
        // console.log(response.user.uid);
        setForm('reset');

        const data = {
          fullname: form.fullname,
          profession: form.profession,
          email: form.email,
          uid: response.user.uid,
        };

        firestore()
          .collection('Users')
          .doc(response.user.uid)
          .set(data)
          .then(() => {
            console.log('User added!');
          });

        storeData('Users', data);

        showMessage({
          message: 'User account created & signed in!',
          type: 'success',
        });
        navigation.replace('UploadPhoto', data);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          showMessage({
            message: 'That email address is already in use!',
            type: 'danger',
          });
        }
        if (error.code === 'auth/invalid-email') {
          showMessage({
            message: 'That email address is invalid!',
            type: 'danger',
          });
        }
        if (error.code === 'auth/weak-password') {
          showMessage({
            message: 'Password should be at least 6 characters',
            type: 'danger',
          });
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Header
        title="Create an account"
        onPress={() => navigation.navigate('GetStarted')}
      />
      <Input
        title="Fullname"
        value={form.fullname}
        onChangeText={value => {
          setForm('fullname', value);
        }}
      />
      <Gap height={24} />
      <Input
        title="Profession"
        value={form.profession}
        onChangeText={value => setForm('profession', value)}
      />
      <Gap height={24} />
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
      <Button title="Continue" onPress={continuePressed} />
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
