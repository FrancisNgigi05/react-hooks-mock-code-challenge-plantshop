import React from "react";
import PlantCard from "./PlantCard";

function PlantList( {plants, onDelete, onUpdate} ) {

  const displayPlants = plants.map((plant, index) => {
    return (
      <PlantCard key={index} plant={plant} onDelete={onDelete} onUpdate={onUpdate} />
    );
  });

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {displayPlants}
    </ul>
  );
}

export default PlantList;
