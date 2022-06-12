import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header} from '../components';
import {colors, fonts, storeData} from '../utils';
import {BtnAddPhoto, BtnRemovePhoto, PhotoNull} from '../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';

const UploadPhoto = ({navigation, route}) => {
  const {fullname, profession, uid} = route.params;
  const [photo, setPhoto] = useState(PhotoNull);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [uploadDB, setUploadDB] = useState('');

  const uploadPhoto = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.3, maxHeight: 200, maxWidth: 200},
      res => {
        if (!res.didCancel) {
          setUploadDB(
            `data:${res.assets[0].type};base64,${res.assets[0].base64}`,
          );
          const source = {uri: res.assets[0].uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const continuePressed = () => {
    firestore()
      .collection('Users')
      .doc(uid)
      .update({photo: uploadDB})
      .then(() => {
        const data = route.params;
        data.image = uploadDB;
        storeData('Users', data);
        navigation.replace('MainApp');
      });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.navigate('SignUp')}
      />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Gap height={50} />
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.frame} onPress={uploadPhoto}>
              <Image source={photo} style={styles.image} />
              {!hasPhoto && <BtnAddPhoto style={styles.icon} />}
              {hasPhoto && <BtnRemovePhoto style={styles.icon} />}
            </TouchableOpacity>
            <Text style={styles.title}>{fullname}</Text>
            <Text style={styles.desc}>{profession}</Text>
          </View>
        </View>
        <View>
          <Button title="Upload and Continue" onPress={continuePressed} />
          <Gap height={25} />
          <Button
            // title="Skip for this"
            type="tertiary"
          />
          <Gap height={25} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_bg,
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
  title: {
    color: colors.primary_font,
    fontFamily: fonts[600],
    fontSize: 26,
    textTransform: 'capitalize',
  },
  desc: {
    color: colors.tertiary_font,
    fontFamily: fonts[400],
    fontSize: 20,
    textTransform: 'capitalize',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
