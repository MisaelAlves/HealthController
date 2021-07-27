import { expect } from '@jest/globals';
import React from 'react'
import renderer from 'react-test-renderer';
import DescriptionField from '../Components/descriptionField'

describe('DescriptionField', () => {

    test('Should return all proptypes of DescriptionField component', () => {
        const style = {
            "height": 65,
            "margin": 12,
            "borderWidth": 1,
        }
        const wrapper = renderer.create(<DescriptionField/>).toJSON()

        expect(wrapper.type).toEqual("TextInput")
        expect(wrapper.props).toHaveProperty("placeholder","Descrição...")
        expect(wrapper.props).toHaveProperty("keyboardType", "default")
        expect(wrapper.props).toHaveProperty("multiline",true)
        expect(wrapper.props).toHaveProperty("value",null)
        expect(wrapper.props).toHaveProperty("style",style)
    })
  
})
