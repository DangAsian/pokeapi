import React from "react";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      abilities: []
    };
  }

  componentDidMount = () => {
    const pokemon = this.props.id;
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(pokeApi)
      .then(response => {
        return response.json();
      })
      .then(json => {
        const poke = json;
        console.log(poke);

        let abilities;
        if (Array.isArray(poke.abilities)) {
          abilities = poke.abilities
        } else {
          abilities = [];
        }
        this.setState({
          name: poke.name,
          abilities: abilities,
          img: poke.sprites[Object.keys(poke.sprites)[0]]
        });
      })
      .catch(err => {
        return console.log(err);
      });

  };
  render() {

    const { name, abilities, img } = this.state
    console.log(Array.isArray(abilities))
    console.log(Array.isArray(abilities))
    console.log(abilities[0])
    return (
      <div>
        <h1>{name}</h1>
        <img src={img} />
        {abilities.map((ability, key)=> {
          return (
            <h2 key={key}> {ability.ability.name} </h2>
          )
        })}
      </div>
    );
  }
}

export default Details;
