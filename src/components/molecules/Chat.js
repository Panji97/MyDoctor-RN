import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';

const Chat = ({isYou}) => {
  return (
    <View style={styles.container(isYou)}>
      <View style={styles.containerWrapper(isYou)}>
        <Text style={styles.text(isYou)}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: isYou => ({
    alignItems: isYou ? 'flex-start' : 'flex-end',
    paddingHorizontal: 16,
  }),
  containerWrapper: isYou => ({
    backgroundColor: isYou ? colors.secondary_bg : colors.tertiary_bg,
    padding: 12,
    borderRadius: 15,
    maxWidth: 300,
    borderBottomEndRadius: isYou ? 15 : 0,
    borderBottomStartRadius: isYou ? 0 : 15,
    marginTop: 20,
  }),
  text: isYou => ({
    color: isYou ? colors.primary_bg : colors.primary_font,
    fontFamily: fonts[400],
    fontSize: 16,
  }),
  time: {
    color: colors.tertiary_font,
    fontFamily: fonts[400],
    fontSize: 11,
    marginTop: 8,
  },
  image: {
    height: 30,
    width: 30,
  },
});
