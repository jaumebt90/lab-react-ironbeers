import React from 'react';
import { Link } from 'react-router-dom';

function BeerItem(props) {
  const { image, name, tagline, contributed_by, beerId } = props.beers;
  return (
    <div className="BeerItem">
      <img src="" alt="" />
      <div>
        <h1></h1>
        <h2></h2>
        <p></p>
      </div>
    </div>
  );
}

export default BeerItem;
