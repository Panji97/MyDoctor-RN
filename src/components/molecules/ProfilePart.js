import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {ChevronRight, UserPic} from '../../assets';
import {Rating} from '../atoms';

const ProfilePart = ({type, name, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <Image source={UserPic} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{desc}</Text>
        </View>
      </View>
      {type === 'secondary' && <ChevronRight />}
      {type === 'tertiary' && <Rating />}
    </View>
  );
};

export default ProfilePart;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 12,
    height: 50,
    width: 50,
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
    fontFamily: fonts[400],
    fontSize: 14,
  },
});
