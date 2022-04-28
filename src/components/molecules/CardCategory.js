import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {CardIcon} from '../../assets';

const CardCategory = () => {
  return (
    <View style={styles.container}>
      <CardIcon />
      <Text style={styles.title}>general practitioners</Text>
    </View>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary_bg,
    height: 180,
    width: 150,
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 10,
  },
  title: {
    color: colors.primary_font,
    fontFamily: fonts[600],
    fontSize: 16,
    textTransform: 'capitalize',
  },
});
