import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

function Button({btnName}) {
  return (
    <>
    <button className='btn'>
        {btnName}
        <FiArrowUpRight />

    </button>
    </>
  )
}

export default Button