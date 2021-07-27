import React,  { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export const Test = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return(
        <>
            <View style={styles.container}>
                <Text>{props.title}</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>            
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center"
    }
  });
