const {createContext, useState}= require("react")

export const  cartContext=createContext();
export function CartContextProvider(props) {
    let[cart,setCart]=useState([])

    function addItem() {
        let newCart =cart;

        
    }
}