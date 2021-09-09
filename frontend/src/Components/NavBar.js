import React from "react";
import {Nav } from "react-bootstrap";
import "../App.css"; //import the stylesheet, react and Nav from bootstrap

function NavBar() {
  return (
    <header>
      <Nav className="navbar">
        {/*---Logo icon image --- */}
        <a href="/" className="brand">
          <div >
            <h2> iTunes Search API</h2> {/*When clicking on this header it will return you to the default page*/}
          </div>
        </a>
      </Nav>
      
    </header>
  );
}

export default NavBar; //export NavBar component