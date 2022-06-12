import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ChevronRight} from '../../assets';
import {Rating} from '../atoms';

const ProfilePart = ({name, desc, pic, isSecondary, isTertiary, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container(isSecondary, isTertiary)}
      onPress={onPress}>
      <View style={styles.containerWrapper}>
        <Image source={pic} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{desc}</Text>
        </View>
      </View>
      {isSecondary && <ChevronRight />}
      {isTertiary && <Rating />}
    </TouchableOpacity>
  );
};

export default ProfilePart;

const styles = StyleSheet.create({
  container: (isSecondary, isTertiary) => ({
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: isSecondary ? 1 : 0,
    paddingBottom: isSecondary ? 16 : 0,
    marginTop: isSecondary ? 16 : isTertiary ? 16 : 30,
  }),
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 12,
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  name: {
    color: colors.primary_font,
    textTransform: 'capitalize',
    fontFamily: fonts[600],
    fontSize: 18,
  },
  title: {
    color: colors.primary_font,
    textTransform: 'capitalize',
    fontFamily: fonts[300],
    fontSize: 14,
    maxWidth: 215,
  },
});
