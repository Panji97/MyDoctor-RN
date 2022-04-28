import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors, fonts} from '../utils';
import {ProfilePart, CardCategory, Gap, News} from '../components';

const Doctor = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerWrapper}>
        <Gap height={30} />
        <ProfilePart name="Panji setyo kurniawan" desc="Fullstack developer" />
        <Text style={styles.text}>Want to consult with who today?</Text>
        <View style={styles.card}>
          <ScrollView horizontal>
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
          </ScrollView>
        </View>
        <Text style={styles.name}>Top Rated Doctors</Text>
        <View>
          <ProfilePart
            name="Alexa Rachel"
            desc="Pediatrician"
            type="tertiary"
          />
          <Gap height={16} />
          <ProfilePart
            name="Alexa Rachel"
            desc="Pediatrician"
            type="tertiary"
          />
          <Gap height={16} />
          <ProfilePart
            name="Alexa Rachel"
            desc="Pediatrician"
            type="tertiary"
          />
        </View>
        <Text style={styles.name}>Good News</Text>
        <View>
          <News />
          <Gap height={16} />
          <News />
          <Gap height={16} />
          <News />
        </View>
        <Gap height={100} />
      </View>
    </ScrollView>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_font,
    flex: 1,
  },
  containerWrapper: {
    backgroundColor: colors.primary_bg,
    flex: 1,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  text: {
    color: colors.primary_font,
    paddingHorizontal: 16,
    marginTop: 30,
    marginBottom: 16,
    fontFamily: fonts[600],
    fontSize: 22,
    maxWidth: 290,
  },
  card: {
    flexDirection: 'row',
  },
  name: {
    color: colors.primary_font,
    textTransform: 'capitalize',
    fontFamily: fonts[600],
    fontSize: 20,
    paddingHorizontal: 16,
    marginTop: 30,
    marginBottom: 16,
  },
});
