import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-cor7 flex justify-center gap-8 pt-4 pb-4'>
            <div className='flex gap-4'>
                <a href="" className='text-4xl'><FaLinkedin/></a>
                <a href="https://github.com/vidas-conectadas/vidas-conectadas/blob/main/README.md" className='text-4xl'><IoLogoGithub/></a>
            </div>
            <div>
                <p id="servicos">Serviços | Sobre | Políticas de Privacidade</p>
                <p>© Vidas Conectadas | Todos os direitos reservados</p>
            </div>

        </div>
    )
}

export default Footer