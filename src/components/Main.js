import React from "react";

import styles from "./Main.module.css";
import cake from "../assets/cake.png";

const Main = () => {
    return (
        <>
            <div className={styles.blank}></div>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div className={styles.contentWrapper}>
                        <img src={cake} alt="Image 1" />
                        <div className={styles.text}>
                            <p>Products</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.contentWrapper}>
                        <img src={cake} alt="Image 2" />
                        <div className={styles.text}>
                            <p>Cake Shop</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                </div>
                <div className={styles.subContainer}>
                    <div className={styles.contentWrapper}>
                        <img src={cake} alt="Image 3" />
                        <div className={styles.text}>
                            <p>Recipes</p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                </div>
            </div>
        
    </>
  );
};

export default Main;
