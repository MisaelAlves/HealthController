import React from 'react';
import {Text,View} from 'react-native';

import SalveButton from './salveButton';
import CancelButton from './cancelButton';

const RegisterMedicine = (props) => {

    const { handleClickRegisterMedicine } = props


    return (   
        <>
            <View>
                 <Text> Componente: Periodo de despertar o alarme </Text>
            </View>
            
            <View>
                 <Text> Componente:  Title </Text>
            </View>

            <View>
                 <Text> Componente:  Descrição </Text>
            </View>

            <View>
                 <Text> Componente:  Som </Text>
            </View>

            <View>
                 <Text> Componente:  Vibração </Text>
            </View>
           
            <SalveButton handleClickRegisterMedicine={handleClickRegisterMedicine} />
        
            <CancelButton handleClickRegisterMedicine= {handleClickRegisterMedicine} />
        </>
    )
}


export default RegisterMedicine