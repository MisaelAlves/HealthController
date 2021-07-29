import React, {useState} from 'react';
import { StyleSheet, TextInput } from "react-native";

const Description = () => {
  const [description, setDescription] = useState(null);

  return (
    <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Descrição..."
        keyboardType="default"
        multiline={true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 65,
    margin: 12,
    borderWidth: 1,
  },
});

export default Description;

