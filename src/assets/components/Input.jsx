import React from 'react'

function Input({label}) {

    // const corBorda = `
    //     ${red ? 'border-cor1' : ''}
    // `
    // const corBackGround = `
    
    // `
  return (
    <div className='flex flex-col'>
        <label className='text-cor1 font-medium'>{label}</label>
        <input className='border-2 border-cor4 w-72'></input>
    </div>
  )
}

export default Input





