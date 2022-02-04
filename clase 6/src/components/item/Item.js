import { useState } from "react";
import ItemCounter from "../item-counterclase6/ItemCounter";

const Item = ({item, setSelectedItem}) => {
  const [sotckSelected, setSotckSelected] = useState(0);

  const selectItem = () =>{setSelectedItem(item)}
    ;

  return (
    <>
      <div>
        <h2>Nombre del producto: {item.name}</h2>
        <h2>Descripción del producto: {item.description}</h2>
        <ItemCounter stock={item.stock} />
        <button onClick={selectItem}>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;
