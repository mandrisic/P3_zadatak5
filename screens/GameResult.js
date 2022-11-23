import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, FlatList } from 'react-native';


export function GameResult({ route, navigation }) {
  
  const [comment, setComment] = useState([]);

  const addCommentHandler = (commentTitle) => {
    setComment((currentComment) => [
      ...currentComment,
      {
        id: Math.random().toString(),
        value: commentTitle,
      },
    ]);
  };

  const removeCommentHandler = (commentId) => {
    setComment((currentComment) => {
      return currentComment.filter((comment) => comment.id !== commentId);
    });
  };

function handleHomePress(){
  navigation.navigate("Home")
}

function handleNewsPress(){
  navigation.navigate("News")
}

function handleSettingsPress(){
  navigation.navigate("Settings")
}

  return (
    <View style={styles.screen}>

    <View style={styles.jumbotron}>
    <Text style={styles.text}>Senegal</Text>
    <Text style={styles.text}>vs.</Text>
    <Text style={styles.text}>Nizozemska</Text>
    </View>

      <View style={styles.jumbotron}>
        <Image
          source={{
            uri: 'https://cdn.britannica.com/70/5070-050-8968E7E7/Flag-Senegal.jpg',
          }}
          style={{ width: 100, height: 100 }}
        />

        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/600px-Flag_of_the_Netherlands.svg.png',
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View style={styles.gameResultWrapper}>
      <View style={styles.gameResult}>
        <Text style={styles.text}>0</Text>
        </View>
        <View style={styles.gameResult}>
        <Text style={styles.text}>:</Text>
        </View>
        <View style={styles.gameResult}>
        <Text style={styles.text}>2</Text>
        </View>
      </View>

      <View style={styles.btn}>
        <View style={styles.b}>
      <Button title="GO TO THE HOME SCREEN"       
      onPress={handleHomePress} 
       />
        </View>
       <View style={styles.b}>
      <Button 
      title="GO TO THE NEWS"
      onPress={handleNewsPress} 
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
    padding: 30,
    textAlign: 'center',
    backgroundColor: "#101217",

  },
  jumbotron: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#2aafe8',
    borderBottomWidth: 2,
    padding: 20,
  },
  gameResultWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: '#2aafe8',
    borderBottomWidth: 2,
  },

  gameResult: {
    margin: 30,
  },

  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },

  btn: {

    justifyContent: "center"
  },

  b: {
    margin: 2
  }

});