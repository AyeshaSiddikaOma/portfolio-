import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function Button({ btnName, className }) {
  return (
    <button className={`btn ${className}`}>
      {btnName}
      <FiArrowUpRight />
    </button>
  )
}

export default Button