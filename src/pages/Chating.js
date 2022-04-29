import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  Header,
  Chat,
  InputMessage,
  ButtonMessage,
  Input,
  Button,
  Gap,
} from '../components';
import {colors, fonts} from '../utils';

const Chating = () => {
  return (
    <View style={styles.container}>
      <Header title="Nairobi Putri Hayza" desc="Dokter Anak" isTertiary />
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.time}>Senin, 21 Maret, 2020</Text>
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
          <Chat />
          <Chat isYou />
        </ScrollView>
        <View style={styles.contentWrapper}>
          <View style={styles.input}>
            <Input message />
          </View>
          <View style={styles.button}>
            <Button message />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chating;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
  },
  time: {
    color: colors.tertiary_font,
    fontFamily: fonts[400],
    textAlign: 'center',
    marginTop: 20,
  },
  contentWrapper: {
    flexDirection: 'row',
    backgroundColor: colors.primary_bg,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 5,
  },
  input: {
    flex: 6,
    marginRight: 10,
  },
  button: {
    flex: 1,
  },
});
