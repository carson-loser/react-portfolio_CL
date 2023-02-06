import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar">
      <a href="#" className="looks">here</a>
      <ul className="tabs">
        <li className="tabItem">
          <a href="#" className="tabLink">Home</a>
        </li>
        <li className="tabItem">
          <a href="#" className="tabLink">About Me</a>
        </li>
        <li className="tabItem">
          <a href="#" className="tabLink">Resume</a>
        </li>
        <li className="tabItem">
          <a href="#" className="tabLink">Portfolio</a>
        </li>
        <li className="tabItem">
          <a href="#" className="tabLink">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;