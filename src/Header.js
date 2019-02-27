import React from "react";
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
              {this.props.navbar.map(item => (
                <li>
                  <Link to={`/pokemon/${item}`}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
