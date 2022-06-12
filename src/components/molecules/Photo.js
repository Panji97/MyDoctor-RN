import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../utils';
import {BtnAddPhoto, BtnRemovePhoto, PhotoNull} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';

const Photo = ({title, desc}) => {
  const [hasPhoto, setHashPhoto] = useState(false);
  const [photo, setPhoto] = useState(PhotoNull);

  const uploadPhoto = () => {
    launchImageLibrary({}, res => {
      if (!res.didCancel) {
        const source = {uri: res.assets[0].uri};
        setPhoto(source);
        setHashPhoto(true);
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.frame} onPress={uploadPhoto}>
        <Image source={photo} style={styles.image} />
        {!hasPhoto && <BtnAddPhoto style={styles.icon} />}
        {hasPhoto && <BtnRemovePhoto style={styles.icon} />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
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
});
