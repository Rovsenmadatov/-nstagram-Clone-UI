import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/home/header'
import Stories from '../../components/home/Stories'
import post from '../../utils/post'
import Post from '../../components/home/Post'


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <ScrollView>
        {post.map(post => (
          <Post post={post} key={post.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
  }
})