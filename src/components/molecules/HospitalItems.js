import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {HospitalPic} from '../../assets';

const HospitalItems = () => {
  return (
    <View style={styles.content}>
      <Image source={HospitalPic} />
      <View style={styles.text}>
        <Text style={styles.name}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default HospitalItems;

const styles = StyleSheet.create({
  content: {
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: colors.border_color,
    borderBottomWidth: 1,
  },
  text: {
    marginLeft: 17,
  },
  name: {
    color: colors.primary_font,
    fontFamily: fonts[400],
    fontSize: 14,
    maxWidth: 250,
    marginBottom: 6,
  },
  address: {
    color: colors.primary_font,
    fontFamily: fonts[300],
    fontSize: 12,
  },
});
