
import React from "react";
import PropTypes from 'prop-types';


const Input = ({type , onchange, text, placeholder, value})=>{
    return <div className="form-group">
    <label>{text}</label>
    <input type={type} className="form-control" value={value} onChange={(event)=> onchange(event.target.value)}  placeholder={placeholder}/>
  </div>
}

Input.propTypes ={
    typeClass :PropTypes.string,
    text:PropTypes.string,
    type:PropTypes.string,
    placeholder:PropTypes.string,
    value:PropTypes.string,
    onchange: PropTypes.func
}
export default Input 
