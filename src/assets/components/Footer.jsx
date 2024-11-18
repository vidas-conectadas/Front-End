import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-cor7 h-20 flex justify-center gap-2 items-center pl-1 l:gap-5  '>
            <div className='flex gap-1 tablet:gap-4'>
                <a href="" className='text-2xl tablet:text-4xl laptopL:text-5xl'><FaLinkedin/></a>
                <a href="https://github.com/vidas-conectadas/vidas-conectadas/blob/main/README.md" className='text-2xl tablet:text-4xl laptopL:text-5xl'><IoLogoGithub/></a>
            </div>
            <div className='text-sm tablet:text-lg laptop:text-xl laptopL:text-2xl'>
                <p id="servicos">Serviços | Sobre | Políticas de Privacidade</p>
                <p>© Vidas Conectadas | Todos os direitos reservados</p>
            </div>

        </div>
    )
}

export default Footer