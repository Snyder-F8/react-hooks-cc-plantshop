import React, { useState } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {
  const [search, setSearch] = useState("");

  function handleAddPlant(plant) {
    setPlants([...plants, plant]);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((p) =>
      p.id === updatedPlant.id ? updatedPlant : p
    );
    setPlants(updatedPlants);
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} onUpdatePlant={handleUpdatePlant} />
    </main>
  );
}

export default PlantPage;
