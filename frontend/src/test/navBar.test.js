import React from 'react';
import NavBar from '../Components/NavBar';
import renderer from 'react-test-renderer'; //imported react, renderer and the NavBar component 

test('Renders correctly', () => {
    const tree = renderer
        .create(<NavBar/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
}); //This will test if the Navbar component Renders correctly without any errors and create a snapshot test