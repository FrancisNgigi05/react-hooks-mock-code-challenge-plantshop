import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage( {plants, onAddition, search, onSearch, onDelete, onUpdate} ) {
  return (
    <main>
      <NewPlantForm onAddition={onAddition} />
      <Search search={search} onSearch={onSearch} />
      <PlantList plants={plants} onDelete={onDelete} onUpdate={onUpdate} />
    </main>
  );
}

export default PlantPage;