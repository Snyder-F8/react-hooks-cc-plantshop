import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  function handleStockClick() {
    const updated = { ...plant, soldOut: !plant.soldOut };
    onUpdatePlant(updated);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>

      {plant.soldOut ? (
        <button onClick={handleStockClick}>Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleStockClick}>
          In Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;

