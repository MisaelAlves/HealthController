import { expect } from '@jest/globals';
import React from 'react'
import renderer from 'react-test-renderer';
import Description from '../Components/description'

describe('DescriptionField', () => {

    test('Should return all proptypes of Description component', () => {
        const style = {
            "height": 65,
            "margin": 12,
            "borderWidth": 1,
        }
        const wrapper = renderer.create(<Description/>).toJSON()

        expect(wrapper.type).toEqual("TextInput")
        expect(wrapper.props).toHaveProperty("placeholder","Descrição...")
        expect(wrapper.props).toHaveProperty("keyboardType", "default")
        expect(wrapper.props).toHaveProperty("multiline",true)
        expect(wrapper.props).toHaveProperty("value",null)
        expect(wrapper.props).toHaveProperty("style",style)
    })
  
})
