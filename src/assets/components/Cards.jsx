import React from 'react'

function Cards({ rosa, azul, titulo, texto, icone }) {

  const cores = `
    
    ${rosa ? 'bg-cor7' : ''} 
    ${azul ? 'bg-cor8' : ''} `


  return (
    <div className='border-2 border-cor9 w-48 h-72 gap-2 flex flex-col items-center justify-center rounded-lg laptop:w-64  laptopL:w-72 laptopL:h-96'>
      <div className={`w-12 h-12 ${cores} flex items-center justify-center rounded-lg text-2xl laptop:text-3xl`}>
        {icone}
      </div>
      <div className=''>
        <p className='font-bold text-base laptop:text-lg laptopL:text-2xl'>{titulo}</p>
      </div>
      <div className='ml-2 mr-2 font-semibold'>
        <p className='text-center text-sm laptop:text-base laptopL:text-xl'>{texto}</p>
      </div>
    </div>
  )
}

export default Cards


