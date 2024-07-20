import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { PLANT_URL } from "./url";

function App() {
  const [plants, setPlants] = useState([]);
  const [filterText, setFilterText] = useState('');

  const fetchingPlants = () => {
    fetch(PLANT_URL)
      .then((r) => r.json())
      .then((data) => setPlants(data))
  }
  // console.log(plants);
  useEffect(() => {
    fetchingPlants();
  }, [])

  const handleAddition = (plantObj) => {
    setPlants([plantObj, ...plants]);
  }

  const plantsDisplayed = plants.filter((p) => p.name.toLowerCase().includes(filterText.toLowerCase()))

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantsDisplayed} onAddition={handleAddition} search={filterText} onSearch={setFilterText} />
    </div>
  );
}

export default App;
