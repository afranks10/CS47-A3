import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { millisToMinutesAndSeconds } from './utils';


  export default function IndividualSongItem({songname, songindex, tracknumber, imageurl, duration, albumtitle, artistname}) {
    const songDuration = millisToMinutesAndSeconds(duration);
    return (
      <View style = {styles.songitem}>
        <View style = {{alignItems: 'flex-start'}}>
        <Text style = {{color: 'white'}}>{tracknumber + 1}</Text>
        </View>
        <View style = {styles.coverView}>
          <Image
            style = {styles.albumcover}
          />
        </View>
        <View style = {styles.songTitle}>
          <Text style = {{color: "white"}} numberOfLines={1}>{songname}</Text>
          <Text style = {{color: "white"}} numberOfLines = {1}>{artistname}</Text>
        </View>
        <View style = {styles.Third}>
          <Text style = {{color: "white"}}>{albumtitle}</Text>
        </View>
        <View style = {styles.Fourth}>
          <Text style = {{color: "white"}}>{songDuration}</Text>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    songitem: {
      marginStart:55,
      flexDirection: 'row',
      //justifyContent: 'space-evenly',
      alignItems: 'flex-start',
      backgroundColor: 'black',
      padding: 6,
    },
    songTitle: {
      alignItems: 'center',
      //backgroundColor: 'green',
      width: '30%',
      marginStart: 20,
    },

    Third: {
      flexDirection: 'row',
      //backgroundColor: 'red',
      width:"30%",
      //marginStart: 40,
    },

    Fourth: {
      //color: 'blue',
      width: "10%",

    },

    coverView: {
      backgroundColor: 'white',
      height: '100%',
      width: '10%',
      marginStart: 10,
    },

  });