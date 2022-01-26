import React, { useState } from "react";

const ItemCounter = ({ stock }) => {
  const [counter, setCounter] = useState(0);
  const [currentTimes, setCurrentTimes] = useState(0);
<ItemCounter stock={4} />



  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

   const plusCounter = () => {
    if (counter < stock) return;
    { setCounter(counter+1) };
   };


  const takeMe = () => {
    setCurrentTimes(counter);
    
  };



  return (
    <>
      <div>
        <h3>Has agregado {currentTimes} elementos</h3>
        <button onClick={minusCounter}>-</button>
        <span>{counter}</span>
        <button onClick={plusCounter}>+</button>
      </div>
      <button onClick={takeMe}>Agregar al carrito</button>
    </>
  );
};

export default ItemCounter;
