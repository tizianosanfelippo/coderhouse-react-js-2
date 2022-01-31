import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const ItemCounter = ({ stock, setSotckSelected }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setSotckSelected(counter);
  }, [counter]);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={minusCounter}>-</Button>
        <span>{counter}</span>
        <Button variant="primary" onClick={plusCounter}>+</Button>
      </div>
    </>
  );
};

export default ItemCounter;
