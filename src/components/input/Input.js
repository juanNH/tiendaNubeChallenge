import React from 'react'
import "./Input.scss";

const Input = ({name, type, value, action}) => {
  return (
    <>
      <input name={name} type={type} value={value} onChange={action} />
    </>
  )
}

export default Input