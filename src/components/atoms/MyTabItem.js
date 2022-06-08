import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DoctorActive,
  DoctorUnactive,
  HospitalActive,
  HospitalUnactive,
  MessageActive,
  MessageUnactive,
} from '../../assets';
import {colors, fonts} from '../../utils';

const MyTabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <DoctorActive /> : <DoctorUnactive />;
    }
    if (title === 'Message') {
      return active ? <MessageActive /> : <MessageUnactive />;
    }
    if (title === 'Hospital') {
      return active ? <HospitalActive /> : <HospitalUnactive />;
    }
    return <DoctorActive />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyTabItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: active => ({
    fontFamily: fonts[600],
    fontSize: 16,
    color: active ? colors.secondary_bg : colors.primary_bg,
    textAlign: 'center',
    marginTop: 4,
  }),
});
