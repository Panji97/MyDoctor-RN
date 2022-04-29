import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Photo} from '../components';
import {colors} from '../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        title="Edit Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <ScrollView>
        <Photo remove />
        <Input title="Fullname" />
        <Gap height={24} />
        <Input title="Profession" />
        <Gap height={24} />
        <Input title="Emaill Address" />
        <Gap height={24} />
        <Input title="Password" secureTextEntry />
        <Gap height={40} />
        <Button
          title="Save Profile"
          onPress={() => navigation.replace('UserProfile')}
        />
        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
});
