import React from 'react';
import SearchBar from '../Components/SearchBar';
import renderer from 'react-test-renderer'; //imported react, renderer and the SearchBar component 

test('Renders correctly', () => {
    const tree = renderer
        .create(<SearchBar/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
}); //Another snapshot will be created for the SearchBar to see if any code may have changed
