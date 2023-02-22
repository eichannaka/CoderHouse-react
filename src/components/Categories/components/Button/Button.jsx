import React from 'react'
import "./Button.css"

export function Button(props) {
    return (
        <button onClick={(props) => props.id} style={{ backgroundColor: props.color }} className="detalle">
            Ver detalle
        </button>
    );
}

//named exports
export function ButtonChild(props) {
    return (
        <button onClick={() => alert("click!")} style={{ backgroundColor: props.color }} className={""}>
            {props.children}
        </button>
    )
}
