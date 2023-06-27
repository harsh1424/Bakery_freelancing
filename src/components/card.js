import { useContext } from "react";
import React from "react";
import styles from './card.module.css';

import MealItemForm from "./itemForm";
import CartContext from "../store/Cart-Context";

const Card = (props) => {

    const cartCtx = useContext(CartContext)


    const addToCartHandler =(amount)=> {
      cartCtx.addItem({
        id : props.id,
        name : props.name,
        amount : amount,
        price : props.price
      })
    };

    return(
    <>
    <div className={styles.card}>
        <img src={props.image} alt="Image 1" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p className={styles.price}>Rs {props.price}</p>
        <MealItemForm onAddToCart = {addToCartHandler} />
        {/* <button className={styles.addToCart}>Add to Cart</button> */}
      </div>
    </>
)}

export default Card;