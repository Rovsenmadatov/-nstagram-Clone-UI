import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../theme/color';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient
             style={styles.cover}
             colors={['#C913B9', '#F9373F', '#FECD00']}>
            <View style={{
             backgroundColor:"white",
             borderRadius:50,
             width:83,
             height:83,
             alignItems:"center",
             justifyContent:"center"
            }} >
           <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/13.jpg'}}
          style={styles.avatar}
        />
            </View>
           </LinearGradient>

      <View style={styles.stats}>
        <Text style={styles.statNumber}>330</Text>
        <Text style={styles.statLabel}>Post</Text>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statNumber}>10,9B</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>

      <View style={styles.stats}>
        <Text style={styles.statNumber}>24</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatar: {
    width: 70,
     height: 70, 
     borderRadius: 40,
    zIndex:999
    },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.BLACK,
  },
  statLabel: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.BLACK,
  },
});