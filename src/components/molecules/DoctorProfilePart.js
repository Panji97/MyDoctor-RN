import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';

const DoctorProfilePart = ({title, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default DoctorProfilePart;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.tertiary_font,
    paddingHorizontal: 16,
  },
  title: {
    color: colors.tertiary_font,
    fontFamily: fonts[400],
    fontSize: 16,
    marginTop: 16,
  },
  desc: {
    color: colors.primary_font,
    fontFamily: fonts[600],
    fontSize: 16,
    marginVertical: 6,
  },
});
