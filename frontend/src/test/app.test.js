import React from 'react';
import { shallow } from 'enzyme' //imported react from react and shallow from enzyme
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16"; //configure from enzyme and adapter is imported so that shallow can work
configure({ adapter: new Adapter() });
import App from '../App'; //imported App.js

it("renders without crashing", () => {
    shallow(<App />);
  }); //shallow will help to only test the App component fully, to see if it renders correctly