import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {BtnAddPhoto, BtnRemovePhoto, UserPhotoNull} from '../../assets';

const Photo = ({onPress, add, remove, title, desc}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <TouchableOpacity style={styles.frame}>
        <UserPhotoNull />
        {add && <BtnAddPhoto style={styles.icon} />}
        {remove && <BtnRemovePhoto style={styles.icon} />}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
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
    marginBottom: 26,
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
