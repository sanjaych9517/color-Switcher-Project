import React from 'react'

const Button = ({ children, color,set }) => {
    return (
        <button onClick={() => set(color)}
            style={{
                backgroundColor: color
            }}>
            {children}</button>
    )
}

export default Button
