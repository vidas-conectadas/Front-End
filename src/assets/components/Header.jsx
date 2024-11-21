import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import logo from '../images/logo_mao.png';
import user from '../images/icon-user.png';
import logout from '../images/icon-logout.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');

        if (token) {
            axios.get('http://localhost:5000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    setUserName(response.data.nome);
                })
                .catch((error) => {
                    console.error('Erro ao buscar dados do usuário:', error);
                });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Remover o token JWT
        setUserName('');
        navigate('/');
    };

    return (
        <div className='bg-cor3  h-16 w-full flex items-center justify-between gap-5 pl-2 pr-2 laptop:h-20'>
            <Link to="/">
                <img src={logo} className='size-12 tablet:size-16' alt="" />
            </Link>
            <nav className='text-white font-semibold text-sm flex-wrap justify-around gap-2 flex l:gap-3 l:text-base tablet:text-xl tablet:gap-7 laptop:text-2xl laptop:gap-10 laptopL:text-3xl laptopL:gap-12'>
                <a href="#onde-doar">Onde doar</a>
                <a href="#requisitos">Requisitos</a>
                <a href="#beneficios">Benefícios</a>
                <a href="#duvidas">Dúvidas</a>

            </nav>
            <div className="flex items-center gap-2">
                {userName ? (
                    <>
                        <span className="text-black font-semibold">{userName}</span>
                        <button
                            onClick={handleLogout}
                            className="text-black bg-red-500 hover:bg-red-700 py-2 px-4 rounded"
                        >
                            <img src={logout} alt="Ícone de logout" className='size-10 h-10 w-10' />
                        </button>
                    </>
                ) : (
                    <Link to='/Login' className=' flex flex-col items-center'>
                        <img src={user} alt="Ícone de usuário" className='size-6' />
                        <span className="text-black font-semibold">Login</span>
                    </Link>
                    
                )}
            </div>
        </div>
    );
}

export default Header;
