import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, ProfilePart} from '../components';
import {colors} from '../utils';
import {Logout, Profile, Rated, Language} from '../assets';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
  const logoutPressed = () => {
    auth()
      .signOut()
      .then(() => {
        showMessage({
          message: 'Logout succes!',
          type: 'success',
        });
        navigation.replace('Splash');
      });
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.navigate('MainApp')} />
      <ProfilePart
        pic={Profile}
        name="Edit Profile"
        desc="Last updated yesterday"
        isSecondary
        onPress={() => navigation.navigate('EditProfile')}
      />
      <ProfilePart
        pic={Language}
        name="Language"
        desc="Available 12 languages"
        isSecondary
      />
      <ProfilePart
        pic={Rated}
        name="Give Us Rate"
        desc="On Google Play Store"
        isSecondary
      />
      <ProfilePart
        onPress={logoutPressed}
        pic={Logout}
        name="Log Out"
        desc="Read our guidelines"
        isSecondary
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
});
