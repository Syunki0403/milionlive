import React from 'react'

const Button = (props) => {
    const { text, func, type } = props

    console.log('type :>> ', type);

    return (
        <>
            {type === undefined ? <a className="btn" href='#' onClick={() => func()}>{text}</a> 
            : <a className="btn" href="#movie-area" onClick={() => func(type)}>{text}</a>}
        </>
    )
}

export default Button
