import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, fonts, getData} from '../utils';
import {ProfilePart, CardCategory, Gap, News} from '../components';
import {UserPic} from '../assets';
import firestore from '@react-native-firebase/firestore';

const Doctor = ({navigation}) => {
  const [name, setName] = useState(null);
  const [profesion, setProfesion] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    getData('Users').then(res => {
      // console.log(res);
      setName(res.fullname);
      setProfesion(res.profession);
      setPhoto({uri: res.image});
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <ScrollView>
          <ProfilePart
            pic={photo}
            name={name}
            desc={profesion}
            onPress={() => navigation.navigate('UserProfile')}
          />
          <Text style={styles.text}>Want to consult with who today?</Text>
          <View style={styles.card}>
            <ScrollView horizontal>
              <CardCategory onPress={() => navigation.navigate('ListDoctor')} />
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
              pic={UserPic}
              name="Alexa Rachel"
              desc="Pediatrician"
              isTertiary
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <ProfilePart
              pic={UserPic}
              name="Alexa Rachel"
              desc="Pediatrician"
              isTertiary
            />
            <ProfilePart
              pic={UserPic}
              name="Alexa Rachel"
              desc="Pediatrician"
              isTertiary
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
        </ScrollView>
      </View>
    </View>
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
