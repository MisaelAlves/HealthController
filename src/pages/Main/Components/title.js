import React, {useState} from 'react';
import { StyleSheet, TextInput } from "react-native";

const Title = () => {
  const [title, setTitle] = useState(null);

  return (
    <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Titulo..."
        keyboardType="default"
        multiline={true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    backgroundColor:"#DCDCDC"
  },
});

export default Title;

