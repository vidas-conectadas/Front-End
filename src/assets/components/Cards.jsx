import React from 'react'

function Cards({ rosa, azul, titulo, texto, icone }) {

  const cores = `
    
    ${rosa ? 'bg-cor7' : ''} 
    ${azul ? 'bg-cor8' : ''} `


  return (
    <div className='border-2 border-cor9 h-96 w-72 flex flex-col items-center justify-center  gap-5 rounded-lg'>
      <div className={`w-20 h-20 ${cores} flex items-center justify-center rounded-lg text-5xl`}>
        {icone}
      </div>
      <div className=''>
        <p className='font-bold text-xl'>{titulo}</p>
      </div>
      <div className='ml-2 mr-2 font-semibold'>
        <p className='text-center'>{texto}</p>
      </div>
    </div>
  )
}

export default Cards







