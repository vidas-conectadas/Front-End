import React from 'react'
import { FaUser } from "react-icons/fa";
import logo from '../images/logo_mao.png'


function Header() {
    return (
        <div className='bg-gradient-to-b from-cor2 to-cor4 h-16 w-full flex items-center justify-between gap-5 pl-2 pr-2 laptop:h-20'>
            <img src={logo} className='size-12 tablet:size-16' alt="" />
            <nav className='text-cor9 font-semibold text-sm gap-2 flex l:gap-3 l:text-base tablet:text-xl tablet:gap-7 laptop:text-2xl laptop:gap-10 laptopL:text-3xl laptopL:gap-12'>
                <a href="/History">Onde doar</a>
                <a href="/Login">Carteirinha de doação</a>
                <a href="#">Requisitos</a>
            </nav>
            <a href="/Register"><FaUser color='white' className='size-10 h-10 w-10' /></a>
        </div>
    )
}

export default Header