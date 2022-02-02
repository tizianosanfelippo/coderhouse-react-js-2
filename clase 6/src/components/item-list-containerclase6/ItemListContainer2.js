import React from 'react';
import Item from '../item/Item';
export default function ItemList({products}) {
    console.log(products);
    //el ItemList solo mastica la información que le trae el padre (container) y la manda a Item para que la presente en pantalla.
    return (
        <>
            {products.map((item, index) => {
                return (
                    <Item key={item.id} item={item} />
                )
            })}
        </>
    )
}