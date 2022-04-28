import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../assets';
import {colors, fonts} from '../../utils';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <ArrowBack />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: 'center',
  },
  title: {
    color: colors.primary_font,
    fontFamily: fonts[600],
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
    right: 10,
  },
});
