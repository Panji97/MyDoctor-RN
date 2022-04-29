import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ProfilePart} from '../components';
import {colors, fonts} from '../utils';
import {UserPic} from '../assets';

const Message = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <ScrollView>
          <Text style={styles.title}>Message</Text>
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ProfilePart
            pic={UserPic}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_font,
    flex: 1,
  },
  containerWrapper: {
    backgroundColor: colors.primary_bg,
    flex: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  title: {
    color: colors.primary_font,
    fontFamily: fonts[600],
    fontSize: 22,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
});
