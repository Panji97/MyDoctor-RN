import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils';
import {Cover} from '../assets';
import {HospitalItems} from '../components';

const Hospital = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={Cover} style={styles.image}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.containerWrapper}>
        <ScrollView>
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
          <HospitalItems />
        </ScrollView>
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_font,
    flex: 1,
  },
  containerWrapper: {
    backgroundColor: colors.primary_bg,
    flex: 1,
    borderRadius: 20,
    marginTop: -15,
  },
  image: {
    height: 240,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts[600],
    color: colors.primary_bg,
    fontSize: 20,
  },
  desc: {
    fontFamily: fonts[300],
    color: colors.primary_bg,
    fontSize: 14,
  },
});
