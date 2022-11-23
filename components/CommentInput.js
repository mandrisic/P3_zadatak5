import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const CommentInput = (props) => {
  //deklaracija state varijable
  const [enteredComment, setEnteredComment] = useState('');

  //postavlja vrijednost enteredComment varijable na vrijednost koju unesemo u textInuptu
  const commentInputHandler = (enteredText) => {
    setEnteredComment(enteredText);
  };

  //kada se pozove onAddComment bilo gdje u aplikaciji proslijeđuje enteredComment vrijednost i čisti textInput
  const addCommentHandler = () => {
    props.onAddComment(enteredComment);
    setEnteredComment('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write a comment"
        style={styles.textInput}
        onChangeText={commentInputHandler}
        value={enteredComment}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Post" onPress={addCommentHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    flex: 1,
  },
  textInput: {
    margin: 10,
    width: '50%',
    borderColor: '#2aafe8',
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
export default CommentInput;
