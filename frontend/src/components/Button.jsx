import React from 'react'

function Button({label , onClick}) {
  return <button onClick={onClick} type="button" className='w-full text-purple-700 text-sm font-bold bg-white hover:bg-gradient-to-r from-purple-700 to-blue-900 hover:text-white hover:transition-delay hover:duration-200 rounded-lg px-5 py-2.5 me-2 mb-2'>
    {label}
  </button>
}

export default Button