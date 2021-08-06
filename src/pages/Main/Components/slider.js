import React from 'react'
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/FontAwesome';


const SliderSound =()=>{
    return (
        <>
            <Icon name="sound" size={30}/>;

            <Slider
                style={{width: 200, height: 40}}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#008000"
                maximumTrackTintColor="#000000"
            />
        </>
    )
}

export default SliderSound