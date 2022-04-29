import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ArrowBack, ArrowBackWhite, UserPic} from '../../assets';
import {colors, fonts} from '../../utils';

const Header = ({onPress, title, isSecondary, isTertiary}) => {
  if (isTertiary) {
    return (
      <View style={styles.container(isTertiary)}>
        <TouchableOpacity onPress={onPress}>
          {isTertiary && <ArrowBackWhite />}
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title(isTertiary)}>{title}</Text>
          <Text style={styles.desc}>Dokter Anak</Text>
        </View>
        <Image source={UserPic} style={styles.image} />
      </View>
    );
  }
  return (
    <View style={styles.container(isSecondary)}>
      <TouchableOpacity onPress={onPress}>
        {!isSecondary && <ArrowBack />}
        {isSecondary && <ArrowBackWhite />}
      </TouchableOpacity>
      <Text style={styles.title(isSecondary)}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (isSecondary, isTertiary) => ({
    backgroundColor: isSecondary
      ? colors.primary_font
      : isTertiary
      ? colors.primary_font
      : colors.primary_bg,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: 'center',
    borderBottomEndRadius: isSecondary ? 20 : isTertiary ? 20 : 0,
    borderBottomStartRadius: isSecondary ? 20 : isTertiary ? 20 : 0,
    justifyContent: isTertiary ? 'space-around' : 'space-between',
  }),
  content: {
    alignItems: 'center',
  },
  title: (isSecondary, isTertiary) => ({
    color: isSecondary
      ? colors.primary_bg
      : isTertiary
      ? colors.primary_bg
      : colors.primary_font,
    fontFamily: fonts[600],
    fontSize: 22,
    flex: isSecondary ? 1 : isTertiary ? 0 : 1,
    textAlign: 'center',
    right: isTertiary ? 0 : 10,
  }),
  desc: {
    fontFamily: fonts[400],
    color: colors.primary_bg,
    fontSize: 14,
  },
  image: {
    height: 46,
    width: 46,
  },
});
