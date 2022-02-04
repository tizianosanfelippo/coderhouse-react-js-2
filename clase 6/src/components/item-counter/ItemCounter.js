import React, { useState } from "react";
import { Button } from "react-bootstrap";


const ItemCounter = ({ stock }) => {
  const [counter, setCounter] = useState(0);
  const [currentTimes, setCurrentTimes] = useState(0);



  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter < stock)
    { setCounter(counter+1) };
   };


  const takeMe = () => {
    setCurrentTimes(counter);
    
  };



  return (
    <>
      <div>
        <h3>Has agregado {currentTimes} elementos</h3>
        <Button variant="primary" onClick={minusCounter}>-</Button>
        <span> {counter} </span>
        <Button variant="primary" onClick={plusCounter}>+</Button>

      </div>
      
      {/* <Button style={{marginTop:10,marginBottom:10}} variant="primary" onClick={takeMe}>Agregar al carrito</Button> */}
    </>
  );
};

export default ItemCounter;
