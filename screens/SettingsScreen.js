import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

export function SettingsScreen({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

function handleNewsPress(){
  navigation.navigate("News")
}

function handleGameResultPress(){
  navigation.navigate("GameResult")
}

  return (
    <View style={styles.screen}>
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
      title="GO TO THE HOME SCREEN"
      onPress={handleHomePress} 
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
    justifyContent: "center"
  },

  btn: {

    justifyContent: "center"
  },

  b: {
    margin: 2
  }
  
});
