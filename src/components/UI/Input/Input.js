import React, { useRef, useImperativeHandle } from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const {isValid, label, id, type, value, onChange, onBlur} = props;
    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(
        ref,
        () => ({
            focus: activate
        }),
        [],
    )

    return (
        <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ''
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          label={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
});

export default Input;