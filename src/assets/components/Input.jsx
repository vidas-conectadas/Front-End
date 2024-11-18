import React from 'react'

function Input({label, onChange, type, id, value, name}) {

  return (
    <div className='flex flex-col'>
        <label className='text-cor1 font-medium '>{label}</label>
        <input className='border-2 border-cor4 w-48 rounded-sm tablet:w-56' onChange={onChange} type={type} id={id} value={value} name={name}></input>
    </div>
  )
}

export default Input





