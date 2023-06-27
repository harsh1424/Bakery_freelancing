import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isSixChars = (value) => value.trim().length === 6;

const Checkout = (props) => {
    const[formInputValidy, setFormInputValidy] = useState({
        name:true,
        street: true,
        postalCode: true,
        city: true,
    })

    const nameInputRef = useRef("");
    const streetInputRef = useRef("");
    const postalCodeInputRef = useRef("");
    const cityInputRef = useRef("");

    const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);

    setFormInputValidy({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        city: enteredCityIsValid,
        postalCode: enteredPostalCodeIsValid
    })
    console.log(formInputValidy)

    const formIsValid =
      enteredPostalCodeIsValid &&
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid;
    
    if(!formIsValid){
        return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
    })
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidy.name ? '' : classes.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidy.name && <p>Please enter a valid input</p> }
      </div>
      <div className={`${classes.control} ${formInputValidy.street ? '' : classes.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidy.street && <p>Please enter a valid input</p> }
      </div>
      <div className={`${classes.control} ${formInputValidy.postalCode ? '' : classes.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputValidy.postalCode && <p>Please enter a valid input</p> }
      </div>
      <div className={`${classes.control} ${formInputValidy.city ? '' : classes.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidy.city && <p>Please enter a valid input</p> }
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
