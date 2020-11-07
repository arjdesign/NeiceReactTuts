import React from 'react'
import ReactDom from 'react-dom'
import FavouriteNumber from '../__test__/favourite-number'
import * as JestDom from '@testing-library/jest-dom'

expect.extend(JestDom)

test('renders a num with label "Fav number"', () => {
    //create a div
    const div = document.createElement('div')
    // render FavouriteNumber to a div
    ReactDom.render(<FavouriteNumber/>, div)
    console.log(div.innerHTML)
    
})
