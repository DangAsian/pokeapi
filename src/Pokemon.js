import React from 'react';
import { Link } from '@reach/router';

class Pokemon extends React.Component {
  render(){
    const { name } = this.props
    return(
      <Link to={`/pokemon/details/${name}`}>
        <div className="pokemon-content">
          <h2>{name}</h2>
        </div>
      </Link>
    )
  }
}

export default Pokemon;
