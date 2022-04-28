import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Photo} from '../components';
import {colors} from '../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View>
          <Gap height={50} />
          <Photo />
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={25} />
          <Button
            title="Skip for this"
            type="tertiary"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_bg,
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
});
