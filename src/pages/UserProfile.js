import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Header, Photo, ProfilePart} from '../components';
import {colors} from '../utils';
import {Logout, Profile, Rated, Language} from '../assets';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.navigate('MainApp')} />
      <Photo title="Panji setyo kurniawan" desc="Fullstack developer" />
      <Gap height={30} />
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
        pic={Logout}
        name="Help Center"
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
