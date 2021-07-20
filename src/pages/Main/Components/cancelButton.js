import React from 'react';
import {ThemeProvider, FAB} from 'react-native-elements';


const CancelButton = (props) => {

    const {handleClickRegisterMedicine} = props
    
    const onClick = () => { 
        handleClickRegisterMedicine(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <FAB onPress={onClick}/> 
        </ThemeProvider>
    )
}


const theme = {
    FAB: {
    title: 'Cancelar',
    color: 'red',
    }
};


export default CancelButton