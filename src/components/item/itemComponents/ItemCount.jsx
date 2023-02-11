import {useState}from 'react'; 

function ItemCount() {
  return (
    <div className='itemcount_container'>
        <small>Agrega la cantidad deseada al carrito</small>
        <div className='itemcount_control'>
            <button className='btn' onClick={{}}>
                -
            </button>
            <span className='itemcount_count'></span>
            <button className='btn' onClick={{}}>
                +
            </button>
        </div>

        <div className='itemcount_btns'>
            <button className='btn' onClick={{}}>
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}

export default ItemCount