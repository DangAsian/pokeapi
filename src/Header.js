import React from "react";
import Home from "./Home";
import "./Header.css";
import { Link } from "@reach/router";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="container-logo">
            <h1>Pokemon</h1>
          </div>
          <div className="container-nav">
            <ul>
                <li><Link to={`/pokemon/home`}><Home/>Home</Link></li>
                <li><Link to={`/pokemon/about`}><Home/>About</Link></li>
                <li><Link to={`/pokemon/contact`}><Home/>Contact</Link></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
