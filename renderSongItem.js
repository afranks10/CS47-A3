import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { millisToMinutesAndSeconds } from './utils';


  export default function renderSongItem({songname, songindex, imageurl, length, albumtitle, artistname}) {
    const songDuration = millisToMinutesAndSeconds(length);
    return (
      <SafeAreaView style = {styles.songitem}>
        <Text style = {styles.songname}>{index}</Text>
        <Image style = {styles.albumImage}> source = {{imageurl}}</Image>
        <SafeAreaView Lines = {1} style = {styles.artistName}>
          <Text Lines = {1} style = {styles.songtitle}>{songname}</Text>
          <Text Lines = {1} style = {styles.songtitle}>{artistname}</Text>
        </SafeAreaView>
        <Text style = {styles.albumStyle}>{albumtitle}</Text>
        <Text style = {styles.songDurationStyle}>{songDuration}</Text>
      </SafeAreaView>

    )
  }

  const styles = StyleSheet.create({
    songitem: {

    },
    albumImage: {

    },

    artistName: {

    },
    
    albumStyle: {

    },

    songDurationStyle: {

    },

  });