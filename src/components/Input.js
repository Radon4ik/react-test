import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

const Input = (props) => {
    const [value, setValue] = useState(props.defaultValue);
    const handleChange = (event) => {
        setValue(event.currentTarget.value);
        console.log(event.currentTarget.value);
    };

    return<input type="text" value={value} onChange={handleChange}/>;
};

Input.propTypes = {
    defaultValue: PropTypes.string.isRequired,
};

export default Input;