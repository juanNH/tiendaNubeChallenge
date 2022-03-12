import React from 'react'
import './Label.scss'
const Label = ({ text }) => {
    return (
        <>
            <label className="label" >{text}</label>
        </>
    )
}

export default Label