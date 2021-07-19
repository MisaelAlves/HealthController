import React, {useState} from 'react';
import {ThemeProvider, FAB} from 'react-native-elements';


const AddButton = (props) => {

  const { handleClickAddButton } = props

  const onClick = (event) => {
    // console.log("ok Click Add alarm  ===>>>>>!!!! /n/n/", event) 
    handleClickAddButton(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <FAB onPress={onClick}/> 
    </ThemeProvider>
  );
};


const theme = {
  FAB: {
    title: '+',
    color: 'blue',
  }
};

export default AddButton