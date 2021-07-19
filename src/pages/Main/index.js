import React, {useState} from 'react';

import {
  View, Text
} from 'react-native';

import AddButton from '../Main/Components/addButton'
import RegisterMedicine from './Components/registerMedicine';

const Main = () => {

  const [handleAddButton,setHandleAddButton] = useState(true)
  const [handleRegisterMedicine,setRegisterMedicine] = useState(false)
  const [handleCancelButton, setHandleCancelButton] = useState(true)
  const [handleSalveButton, setHandleSalveButton] = useState(true);


  const handleClickAddButton = (value) => {
    setHandleAddButton(value)
    setRegisterMedicine(!value)
  }

  const handleClickRegisterMedicine = (value) => {
    setRegisterMedicine(value)
    setHandleAddButton(!value)
  }

  const handleClickCancelButton = (value) => {
    setHandleCancelButton(value)
  }

  const handleClickSalveButton = (value) => {
    setHandleSalveButton(value)
  }


  return(
    <>
      { 
        handleAddButton && 
        <>
          <View>
            <Text> Home </Text>
          </View> 

          <View>
            <Text> Componente: alarmes com titulo e button on/off </Text>
            <Text> Componente: alarmes com titulo e button on/off </Text>
            <Text> Componente: alarmes com titulo e button on/off </Text>
          </View>
        
          <AddButton handleClickAddButton={handleClickAddButton}/>
        </>
      }

      { 
        handleRegisterMedicine && 
        <RegisterMedicine handleClickRegisterMedicine={handleClickRegisterMedicine} />
      }
    </>
  )
};

export default Main;
