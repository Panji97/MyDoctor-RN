import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {BtnAddPhoto, BtnRemovePhoto, UserPhotoNull} from '../../assets';

const Photo = ({type, onPress}) => {
  if (type === 'add') {
    return <BtnAddPhoto />;
  }
  if (type === 'remove') {
    return <BtnRemovePhoto />;
  }

  return (
    <View style={styles.container} onPress={onPress}>
      <TouchableOpacity style={styles.frame}>
        <UserPhotoNull />
        <BtnAddPhoto style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>Panji setyo kurniawan</Text>
      <Text style={styles.desc}>Fullstack Developer</Text>
    </View>
  );
};

export default Photo;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.primary_bg,
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
  },
  desc: {
    color: colors.tertiary_font,
    fontFamily: fonts[400],
    fontSize: 20,
  },
});
