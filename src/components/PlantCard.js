import React, { useState } from "react";

function PlantCard( {plant} ) {
  const {id, name, image, price} = plant;
  const [inStock, setIsStock] = useState(true);

  const handleClick = () => {
    setIsStock((inStock) => !inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {/* {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )} */}

      <button className={inStock ? 'primary' : ''} onClick={handleClick}>
        {inStock ? "InStock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
