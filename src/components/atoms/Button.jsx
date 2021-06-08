import React from 'react'

const Button = (props) => {
    const { text, showLives, type } = props

    return (
        <>
            <a className="btn" href="#movie-area" onClick={() => showLives(type)}>{text}</a>
        </>
    )
}

export default Button
