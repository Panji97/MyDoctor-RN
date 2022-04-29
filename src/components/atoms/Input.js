import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../utils';

const Input = ({title, secureTextEntry, message}) => {
  // ======> custom input message

  if (message) {
    return (
      <TextInput
        style={styles.inputMessage}
        placeholder="Tulis pesan untuk"
        placeholderTextColor={colors.tertiary_font}
      />
    );
  }

  // ======> end

  const [border, setBorder] = useState(colors.primary_font);

  const onFocus = () => {
    setBorder(colors.border_focus);
  };

  const onBlur = () => {
    setBorder(colors.primary_font);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.input(border)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
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
    color: colors.primary_font,
  }),
  inputMessage: {
    backgroundColor: colors.border_color,
    borderRadius: 10,
    color: colors.primary_font,
    padding: 14,
    fontFamily: fonts[400],
    fontSize: 16,
  },
});
