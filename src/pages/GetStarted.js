import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils';
import {Bg, Logo} from '../assets';
import {Button, Gap} from '../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={Bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.text}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('SignUp')}
        />
        <Gap height={20} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Gap height={20} />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 40,
  },
  text: {
    color: colors.secondary_font,
    fontFamily: fonts[600],
    fontSize: 30,
    maxWidth: 280,
    marginTop: 90,
  },
});
