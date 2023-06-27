import React from "react";
import styles from "./Products.module.css";
import Cake from "../assets/cake.png";
import Card from "./card";
import Product from "../assets/Product.jpg";

const Dummy_data = [
  {id: 1, name: "Desert Cake", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 200, image:Product},
  {id: 2, name: "Black Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 250, image:Product},
  {id: 3, name: "White Forest", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 300, image:Product},
  {id: 4, name: "Pineapple", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", price: 350, image:Product}
]

const Products = () => {

 
  return (
    <>
      <div className={styles.productHeading}>
        <h2>NEW PRODUCTS</h2>
        <img src={Cake} alt="cake logo" />
      </div>

      <div className={styles.cardContainer}>
  {Dummy_data.map((item) => (
    <Card key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>

    
  ))}
</div>

      <br />
      <br />
      <br />
    </>
  );
};

export default Products;


