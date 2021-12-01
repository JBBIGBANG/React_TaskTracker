import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    
    return (
        <div>
            <button className = 'btn' 
             onClick = {onClick} style={{background: color}}>{text}</button>
        </div>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func.isRequired
}
export default Button
