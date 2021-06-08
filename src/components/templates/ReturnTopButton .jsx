import React from 'react'

const ReturnTopButton = () => {
    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }

    return (
        <a onClick={returnTop} className='return-button' href='#'>TOP</a>
    )
}

export default ReturnTopButton
