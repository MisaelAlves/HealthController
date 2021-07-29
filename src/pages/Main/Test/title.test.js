import { expect } from '@jest/globals';
import React from 'react'
import renderer from 'react-test-renderer';
import Title from '../Components/title'

describe('Title', () => {

    test('Should return all proptypes of Title component', () => {
        const style = {
            "height": 40,
            "margin": 12,
            "backgroundColor": "#DCDCDC",
        }
        const wrapper = renderer.create(<Title/>).toJSON()

        expect(wrapper.type).toEqual("TextInput")
        expect(wrapper.props).toHaveProperty("placeholder","Titulo...")
        expect(wrapper.props).toHaveProperty("keyboardType", "default")
        expect(wrapper.props).toHaveProperty("multiline",true)
        expect(wrapper.props).toHaveProperty("value",null)
        expect(wrapper.props).toHaveProperty("style",style)
    })
  
})
