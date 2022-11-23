import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export function HomeScreen({ route, navigation }) {

function handleSettingsPress(){
  navigation.navigate("Settings")
}

function handleNewsPress(){
  navigation.navigate("News")
}

function handleGameResultPress(){
  navigation.navigate("GameResult")
}

  return (
    <View style={styles.screen}>
    <Image
          source={{
            uri: 'https://i.ytimg.com/vi/EXXe-G-_lxI/maxresdefault.jpg',
          }}
          style={{ width: "100%", height: "70%", marginTop: 0 }}
        />
        <View style={styles.btn}>
        <View style={styles.b}>
      <Button title="GO TO THE NEWS"       
      onPress={handleNewsPress} 
       />
        </View>
       <View style={styles.b}>
      <Button 
      title="GO TO THE GAME RESULTS"
      onPress={handleGameResultPress} 
       />
        </View>
       <View style={styles.b}>
      <Button 
      title="GO TO THE SETTINGS SCREEN"
      onPress={handleSettingsPress} 
       />
       </View>
       </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#101217",
  },

  btn: {

    justifyContent: "center"
  },

  b: {
    margin: 2
  }
  
});