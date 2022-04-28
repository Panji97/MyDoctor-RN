import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';

const Button = ({type, title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.title(type)}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    borderWidth: 1,
    borderColor:
      type === 'secondary'
        ? colors.primary_bg
        : type === 'tertiary'
        ? colors.primary_bg
        : colors.primary_font,
    backgroundColor:
      type === 'secondary'
        ? colors.primary_bg
        : type === 'tertiary'
        ? colors.primary_bg
        : colors.secondary_bg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  }),
  title: type => ({
    fontFamily:
      type === 'secondary'
        ? fonts[600]
        : type === 'tertiary'
        ? fonts[400]
        : fonts[600],
    fontSize: 18,
    color:
      type === 'secondary'
        ? colors.primary_font
        : type === 'tertiary'
        ? colors.primary_font
        : colors.secondary_font,
  }),
});
