import React from 'react'

function Heading({label}) {
  return (
    <div className='font-bold text-4xl pt-6 bg-clip-text text-transparent bg-gradient-to-b from-purple-700 to-blue-900'>
        {label}
    </div>
  )
}

export default Heading