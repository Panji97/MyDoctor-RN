import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Pic} from '../../assets';
import {colors, fonts} from '../../utils';

const News = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.desc}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.time}>Today</Text>
      </View>
      <Image source={Pic} />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    color: colors.primary_font,
    textTransform: 'capitalize',
    fontFamily: fonts[600],
    fontSize: 16,
    marginBottom: 4,
  },
  time: {
    color: colors.primary_font,
    textTransform: 'capitalize',
    fontFamily: fonts[400],
    fontSize: 12,
  },
});
