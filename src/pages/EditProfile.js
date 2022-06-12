import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, Header, Input, Photo} from '../components';
import {colors, getData} from '../utils';
import {BtnAddPhoto, BtnRemovePhoto} from '../assets';

const EditProfile = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(true);
  const [photo, setPhoto] = useState(null);
  useEffect(() => {
    getData('Users').then(res => {
      setPhoto({uri: res.image});
    });
  }, []);
  return (
    <View style={styles.container}>
      <Header
        title="Edit Profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.frame}>
            <Image source={photo} style={styles.image} />
            {!hasPhoto && <BtnAddPhoto style={styles.icon} />}
            {hasPhoto && <BtnRemovePhoto style={styles.icon} />}
          </TouchableOpacity>
        </View>
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
  imageContainer: {
    alignItems: 'center',
  },
  frame: {
    borderWidth: 1,
    borderColor: colors.tertiary_font,
    borderRadius: 130 / 2,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
