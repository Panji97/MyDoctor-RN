import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Star} from '../../assets';

const Rating = () => {
  return (
    <View style={styles.container}>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
