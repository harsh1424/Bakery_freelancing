import React, { useState} from "react";
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header';
import Main from './components/Main';
import Products from './components/Products'
import CartProvider from "./store/CartProvider";


function App() {
  const[cartIsShown, setCartIsShown] = useState(false);

  const showCarthandler=() => {
    setCartIsShown(true)
  }


  const hideCarthandler = () => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
       <Header  onShowCart={showCarthandler}/>
       {cartIsShown && <Cart onClose={hideCarthandler}/>}
       <Main/>
       <Products/>
       </CartProvider>
  );
}

export default App;
