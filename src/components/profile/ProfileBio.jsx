import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/color';

const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Dwayne Johnson</Text>
      <Text style={styles.description}>
      ✨Dreamer first, entrepreneur second.                                           
      Building my future, one idea at a time. 🚀Chasing dreams & building realities. 🌍
      </Text>
      <Text style={styles.link}>Link goes here</Text>

      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: COLORS.BLACK,
  },
  description: {
    marginVertical: 5,
    color: COLORS.BLACK,
  },
  link: {
    fontWeight: '400',
    color: COLORS.BLUE,
  },
  editProfileButton: {
    borderColor: COLORS.GRAY,
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor:"#0095F6"
  },
  editProfileText: {
    fontWeight: '700',
    color: "white",
  },
});