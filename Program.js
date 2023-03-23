import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Center} from "native-base";
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import { StatusBar } from 'expo-status-bar';
import Colors from "color";
import FontName from "./fonts/fontName";
import Buttone from "./Components/Buttone";

function Program({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://gdurl.com/srdnH',
          type: 'video/mp4'
          }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      <Center
      mt={10}
      >
      <Buttone
        bg={Colors.darkGreen}
        color={Colors.white}
        onPress={() => navigation.navigate("Profil")}
      >
        Masuk Profil
        </Buttone>
        </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Program;
