import {StyleSheet, View, Image, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({story}) => {
  return (
    <View style={styles.story}>
      <LinearGradient
        style={styles.cover}
        colors={['#C913B9', '#F9373F', '#FECD00']}>
       <View style={{
        backgroundColor:"white",
        borderRadius:30,
        width:58,
        height:58,
        alignItems:"center",
        justifyContent:"center"
       }} >
       <Image source={{uri: story.user.avatar}} style={styles.avatar} />
       </View>
      </LinearGradient>

      <Text numberOfLines={1} style={styles.username}>
        {story.user.name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 60,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    zIndex:999,
    
  },
  username: {
    fontSize: 12,
  },
});