import React from 'react'

const Button = ({color, content, onClick}) => {
    return (
        <button style={{backgroundColor: color}} className="btn" onClick={onClick}>{content}</button>
    )
}

export default Button
