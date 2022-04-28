import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../utils';

const Input = ({title}) => {
  const [border, setBorder] = useState(colors.primary_font);

  const onFocus = () => {
    setBorder(colors.border_focus);
  };

  const onBlur = () => {
    setBorder(colors.primary_font);
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.input(border)}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    color: colors.tertiary_font,
    fontFamily: fonts[400],
    fontSize: 18,
    marginBottom: 6,
  },
  input: border => ({
    borderWidth: 1,
    fontSize: 18,
    fontFamily: fonts[400],
    borderColor: border,
    borderRadius: 10,
    padding: 14,
    // borderColor: colors.border_color,
  }),
});
