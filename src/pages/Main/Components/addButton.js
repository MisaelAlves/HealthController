import React, {useState} from 'react';
import {Text,View} from 'react-native';
import {ThemeProvider, FAB} from 'react-native-elements';


const AddButton = (props) => {

  const { handleClickAddButton } = props

  const onClick = (event) => {
    // console.log("ok Click Add alarm  ===>>>>>!!!! /n/n/", event) 
    handleClickAddButton(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <FAB onPress={onClick}/>
        <View>
          <Text> Ola testando </Text>  
        </View> 
      </>
    </ThemeProvider>
  );
};


const theme = {
  FAB: {
    title: '+',
    color: 'blue',
  },
  View:{
    Text:{
      fontSize: "25px",
    }
  }
};

export default AddButton