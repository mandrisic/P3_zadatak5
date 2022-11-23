import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export function News({ route, navigation }) {

function handleHomePress(){
  navigation.navigate("Home")
}

function handleGameResultPress(){
  navigation.navigate("GameResult")
}

function handleSettingsPress(){
  navigation.navigate("Settings")
}

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>
      Who won Senegal vs Netherlands 2022?
      </Text>

      <Text style={styles.title}>
      Netherlands
      </Text>

      <Text style={styles.text}>
      Netherlands secured a 2-0 victory over Group A opponents Senegal in their 2022 World Cup opener on Monday.
      </Text>

      <View style={styles.btn}>
        <View style={styles.b}>
      <Button title="GO TO THE HOME SCREEN"       
      onPress={handleHomePress} 
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
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#101217",
    color: "white"

  },

  title: {
    color: "white",
    fontSize: 18,
    margin: 15
  
  },

  header: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    borderBottomColor: '#2aafe8',
    borderBottomWidth: 2,
    padding: 10
  },

  text: {
    color: "white",
    margin: 30,
    
  },

  btn: {

    justifyContent: "center"
  },

  b: {
    margin: 2
  }


});