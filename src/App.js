import React, { useState } from "react";
import { Navbar } from "./components";
import MainSection from "./container/MainSection/MainSection";


import "./index.scss";
import "./App.scss";

const App = () => {

    // logic for quantity buttons
    const [quantity, setQuantity] = useState(0);

    const addOne = () => {
        setQuantity( quantity + 1);
    }

    const minusOne = () => {
        setQuantity(quantity - 1);

        if(quantity === 0){
            setQuantity(quantity);
        }
    }

    // logic for shopping cart
    const [cartItems, setCartItems] = useState(0);

    const cartNumber = () => {
      
      if(quantity !== 0){
        setCartItems(cartItems + quantity);
      } else{
        setCartItems(cartItems);
      }      
    }

    const emptyCart = () => {
      setCartItems(0)
    };

  return (
    <div className="app__bg">
      <Navbar 
        cartItems={cartItems}
        emptyCart={emptyCart}
      />
      <MainSection 
        add={addOne}
        minus={minusOne}
        quantity={quantity}
        cartNumber={cartNumber}
      />
    </div>
  )
};

export default App;
