import React from "react";
import PropTypes from 'prop-types';


const Button = ({typeClass , onclick, text})=>{
    return <button type="button" onClick={onclick} className={"btn " + typeClass}>{text}</button>
}

Button.propTypes ={
    typeClass :PropTypes.string,
    text:PropTypes.string,
    onclick: PropTypes.func
}
export default Button 
