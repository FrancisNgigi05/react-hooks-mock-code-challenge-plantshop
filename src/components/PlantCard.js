import React, { useState } from "react";
import { PLANT_URL } from "./url";


function PlantCard( {plant, onDelete, onUpdate} ) {
  const {id, name, image, price} = plant;
  const [inStock, setIsStock] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(price);

  const handleClick = () => {
    setIsStock((inStock) => !inStock)
  }

  const handleDeleteButton = () => {
    fetch(`${PLANT_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(() => onDelete(id))
  }

  const handlePriceChange =(e) => {
    setNewPrice(e.target.value);
  }

  const handleUpdate = () => {
    fetch(`${PLANT_URL}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({price: newPrice}),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        setIsEditing(false);
        onUpdate(updatedPlant);
      })
  }

  const displayUpdateButton = () => {
    if (isEditing === true) {
      return (
        <>
          <input type="number" value={newPrice} onChange={handlePriceChange} />
          <button onClick={handleUpdate}>Save</button>
        </>
      )
    }
    else {
      return (
        <>
          {price}{' '}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )
    }
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${displayUpdateButton()}</p>
      {/* {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )} */}

      <button className={inStock ? 'primary' : ''} onClick={handleClick}>
        {inStock ? "InStock" : "Out of Stock"}
      </button>
      <button onClick={() => handleDeleteButton(id)}>Delete</button>

    </li>
  );
}

export default PlantCard;
