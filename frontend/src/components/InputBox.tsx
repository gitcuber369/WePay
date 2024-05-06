import React from 'react'

function InputBox({label, placeholder,Onchange}) {
  return (
    <div>
        <div className='text-sm font-medium text-left py-2 text-white'>
                {label}
        </div>
        <input placeholder={placeholder} onChange={Onchange} className='w-full text-sm text-white px-2 py-1 border rounded border-none bg-[#26262A]' />
    </div>
  )
}

export default InputBox