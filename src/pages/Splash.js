import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, fonts} from '../utils';
import {Logo} from '../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts[600],
    fontSize: 24,
    color: colors.primary_font,
    marginTop: 20,
  },
});
