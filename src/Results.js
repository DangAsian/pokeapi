import React from 'react';
import Pokemon from './Pokemon';

class Results extends React.Component {
  render(){
    const { pokemon } = this.props
    return(
      <div>
        {pokemon.map(pokemon => {
          return (
             <Pokemon name={pokemon.name}/>
           )
        })}
      </div>
    )
  }
}

export default Results;
