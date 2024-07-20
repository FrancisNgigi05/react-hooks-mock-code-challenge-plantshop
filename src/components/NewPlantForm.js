import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PLANT_URL } from "./url";
function NewPlantForm( {onAddition} ) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();

    const formData = {
      id: uuidv4(),
      name,
      image,
      price,
    };

    fetch(PLANT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        onAddition(data)
        setName('');
        setImage('');
        setPrice('');
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        alert('Error adding plant. Please try again later.');
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleAddTask}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
