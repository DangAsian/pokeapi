import React, { Component } from "react";
import { Router } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import Header from "./Header";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      name: "",
      abilities: [],
      loading: true
    };
  }

  componentDidMount = (poke) => {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/`;

    fetch(pokeApi)
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(json => {
        const pokemons = json;
        // console.log(pokemons)
        // console.log(json);
        this.setState({
          pokemon: pokemons.results,
          loading: false,
        })
      }).catch(err=>{
        console.log(err)
      })
  }

  render() {

    if ( this.state.loading  === true) {
      return <h1 className="find">Loading!!!</h1>;
    }
    const { pokemon, loading } = this.state;
    return (
      <div className="App">
        <Header navbar={this.state.navbar} />
        <Router>
          <Results path="/pokemon/home" pokemon={pokemon} />
          <Details path="/pokemon/details/:id" />
        </Router>
      </div>
    );
  }
}

export default App;
