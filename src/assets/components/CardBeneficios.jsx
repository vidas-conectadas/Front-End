import React from 'react'

function CardBeneficios({ foto, titulo, texto }) {
    return (
        <div className='border-2 border-cor3 w-52 h-[30rem] gap-2 flex flex-col items-center rounded-t-lg rounded-b-lg justify-between laptopL:h-[40rem]'>

            <div className=''>
                <p className='font-bold text-base text-center text-cor3 laptop:text-lg laptopL:text-2xl'>{titulo}</p>
            </div>
            <div className='ml-2 mr-2 font-semibold'>
                <p className='text-center text-base laptop:text-base laptopL:text-xl'>{texto}</p>
            </div>
            <div className={`flex items-center justify-center rounded-lg pt-4`}>
                {foto}
            </div>
        </div>
    )
}

export default CardBeneficios