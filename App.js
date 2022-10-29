import { StyleSheet, SafeAreaView, Text, Button, Pressable, Image, View, FlatList, render, SectionList,} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyColors } from "./assets/Themes/colors";
import { StatusBar } from "react-native-web";
import { getAlbumTracks, getMyTopTracks } from "./utils/apiOptions";


const AuthButton = ({ authFunction }) => {

  return( <Pressable 
      //style = {styles.buttonStyle} 
      onPress={ authFunction }>
        <View style = {styles.buttonStyle}>
          <View style = {styles.IconView}>
              <Image
                style = {styles.SpotifyIcon}
                source = {require('./assets/spotify-logo.png')}
              />
          </View>
        <View styles = {styles.FirstPageTextView}>
        <Text style = {{color: "white", fontWeight: "bold", fontSize: 10, marginEnd: 40,}}>CONNECT WITH SPOTIFY</Text>
        </View>
        </View>
  </Pressable>)
};

const renderSongItem = ({item, index}) => {
  console.log(item)
  (
  <IndividualSongItem //own comoponent to redner
    index = {index + 1}
    songname = {item.name}
    songindex = {item.track_number}
    imageurl = {item.album.images[0].url}
    length = {item.duration_ms}
    albumtitle = {artist.album.name}
    artistanme = {item.artist.name}
  />
);
}

const UserList = ({tracks}) => {
  return (
    <View style = {styles.secondPage}> 
      <View style = {styles.titleRow}>
        <View style = {styles.IconView2}>
        <Image
          style = {styles.SpotifyIcon2}
          source = {require('./assets/spotify-logo.png')}
        />
        </View>
        <View style = {styles.Header}>
          <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30, paddingEnd: 100,}}>My Top Tracks</Text>
        </View>
      </View>
      <FlatList>
        data = {tracks}
        renderItem = {(item) => {renderSongItem(item)}}
        keyExtractor = {(index) => index}
      </FlatList>
    </View>
  );
  }

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  //token -- Boolean if you are authenticated
  //tracks: [{}] - tracks
  //getSpotifyAuth - get 
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  // if token is true, render FlatList
  // else render authentication button

  let contentDisplayed;
  if (token) {
    contentDisplayed = <UserList tracks = {tracks}></UserList>;

  } else {
    contentDisplayed = 
      <AuthButton authFunction = { getSpotifyAuth } ></AuthButton>;
  }

  

  return (
    <SafeAreaView style={styles.container}>
        {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    //marginHorizontal: 16
    //flexDirection: 'column',
  },

  buttonStyle: {
    backgroundColor: '#1DB954',
    width: '45%',
    height: '20%',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //paddingStart: 15,
    marginTop:30,
  },

  SpotifyIcon: {
    resizeMode: 'contain',
    width: '50%',
    height: '100%',
    //position: 'relative',
    marginStart: -25,
    paddingStart: 10,

  },

  SpotifyIcon2: {
    width: '40%',
    height:'40%',
    resizeMode: 'contain',
    //backgroundColor: 'blue',
  },

  IconView: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    alignItems: 'center',
    paddingStart: 90,

  },


  IconView2: {
    width: '50%',
    height: '100%',
    resizeMode: 'contain',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingStart: 50,
    //backgroundColor: 'red',

  },

  secondPage: {
    //flexDirection: 'column',
    //addingTop: StatusBar.currentHeight,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },

  titleRow: {
    flexDirection: 'row',
    padding: 20,
    //paddingTop: 50,
    marginBottom: 10,
    backgroundColor: 'black',
    //justifyContent: 'space-evenly',
    width:'100%',
    height: '15%',
    //justifyContent: 'ce'
    //height: '50%',
    alignItems: 'center',
    //backgroundColor: 'blue',
    //paddingTop: StatusBar.currentHeight,
  },

  Header: {
    //backgroundColor: 'blue',
    //height: 200,
    //marginEnd: 100,
    height: '100%',
    justifyContent: 'center',
    //flexDirection: 'row,'
  },

  FirstPageTextView: {
  },

  item: {
    backgroundColor: "red",
    padding: 10,
    marginVertical: 8
  },
});
