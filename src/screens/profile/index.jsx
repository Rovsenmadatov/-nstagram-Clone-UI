import { Dimensions, FlatList, Image, ScrollView,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfileHeader from '../../components/profile/ProfileHeader'
import ProfileInfo from '../../components/profile/ProfileInfo'
import ProfileBio from '../../components/profile/ProfileBio'
import ProfileStory from '../../components/profile/ProfileStory'
import post from '../../utils/post'

const ProfileScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;

  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns;

  const renderProps = ({item}) => (
    <TouchableOpacity>
      <Image
        source={{uri: item.image}}
        style={{width: imageSize, height: imageSize, margin: 1}}
      />
    </TouchableOpacity>
  );
  return (
    <View style={{flex:1,marginTop:50}} >
      <ScrollView style={styles.container} >
        <ProfileHeader/>
        <ProfileInfo/>
        <ProfileBio/>
        <ProfileStory/>

        <FlatList
          keyExtractor={index => index.toString()}
          data={post}
          renderItem={renderProps}
          numColumns={numColumns}
          style={{marginTop: 15}}
        />

      </ScrollView>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
   flex:1,
    backgroundColor:"#fff",
  }
})