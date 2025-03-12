import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Bookmark, Commet, Heart, Share, Dots} from '../../utils/icons';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';

const Post = ({post}) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}> 
            <View style={styles.username}>
                <Image source={{uri: post.user.avatar }}  style={styles.avatar} />
                <Text style={styles.title} >{post.user.name}</Text>
            </View>
            <Dots/>
      </View>

      <FitImage src={post.image} />

      <View style={styles.content} > 
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Commet size={24} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Share size={24} />
            </TouchableOpacity>
          </View>
          <View style={styles.rightActions}>
            <TouchableOpacity>
              <Bookmark />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.likes}> {post.likes} likes </Text>
        </View>

         <ReadMore
          seeLessStyle={{color: '#999'}}
          seeLessText="Daha az"
          seeMoreText="Daha fazla"
          seeMoreStyle={{color: '#999'}}
          numberOfLines={2}
         >
          <Text style={styles.user}>{post?.user.name}</Text>
          {` `}
          {post?.description}
        </ReadMore>
        

        {post.comments > 0 && (
          <TouchableOpacity style={{paddingBottom: 7}} activeOpacity={0.7}>
            <Text style={styles.comments}> {post.comments} comments </Text>
          </TouchableOpacity>
        )}

        <View>
          <Text style={styles.date}>{post.date} </Text>
          <Text style={styles.translation}> See Translation </Text>
        </View>   

      </View>


    </View>
  )
}

export default Post

const styles = StyleSheet.create({
    post: {
      marginBottom: 30,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginVertical: 10,
    },
    username: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 30,
      height: 30,
      borderRadius: 30,
      marginRight: 10,
    },
    title: {
      fontSize: 14,
      fontWeight: '600',
    },
    content: {
      paddingHorizontal: 10,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 40,
    },
    leftActions: {
      flexDirection: 'row',
      gap:10,
      justifyContent:"center",
      alignItems:"center"
    },
    action: {
      marginRight: 12,
    },
    likes: {
      fontWeight: '600',
      marginVertical: 4,
    },
    user: {
      fontWeight: '600',
      marginRight:10
    },
    comments: {
      marginTop: 5,
      opacity: 0.5,
    },
    translation: {
      fontSize: 13,
      fontWeight: '600',
      marginTop: 7,
    },
    date: {
      fontSize: 13,
      opacity: 0.5,
      marginLeft:4
    },
  });