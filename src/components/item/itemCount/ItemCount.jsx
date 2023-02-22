import React, { useState } from 'react'
import "./itemCount.css"
import onAddToCart from "../../../views/Product/Product"

function ItemCount() {
    const [count, setCount] = useState(0);
    function handleAdd() {
        //count <stock
        setCount(count + 1);
    }
    function handleSubstract() {
        //validar -1 -2
        if (count <= 0) {
            alert("No puede pedir una cantidad menor a 0");
        } else {
            setCount(count - 1)
        }
    }
    return (
        <div className='itemcount_container'>
            <small>Agrega la cantidad deseada al carrito</small>
            <div className='itemcount_control'>
                <button className='btn' onClick={handleSubstract}>
                    -
                </button>
                <span className='itemcount_count'>{count}</span>
                <button className='btn' onClick={handleAdd}>
                    +
                </button>
            </div>
            <div className='itemcount_btns'>
                <button className='btn' onClick={() => onAddToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount