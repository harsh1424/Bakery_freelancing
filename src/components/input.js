import classes from './input.module.css';
import React  from 'react';

const Input = React.forwardRef((props,ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />  
        {/*  {...props.input} input object me jiite bhi key value pair rhenge usko idhar set kr dega jaisa type="number" */}
    </div>
});

export default Input;