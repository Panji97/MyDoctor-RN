import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, DoctorProfilePart, Gap, Header, Photo} from '../components';
import {colors} from '../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <Photo title="Dr. Burhan " desc="Dentist" add />
      <Gap height={10} />
      <DoctorProfilePart title="Alumnus" desc="Universitas Indonesia, 2020" />
      <DoctorProfilePart
        title="Tempat Praktik"
        desc="Rumah Sakit Umum, Bandung"
      />
      <DoctorProfilePart title="No. STR" desc="0000116622081996" />
      <Gap height={40} />
      <Button
        title="Start Consultation"
        onPress={() => navigation.navigate('Chating')}
      />
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_bg,
    flex: 1,
  },
});
