import React, { useState } from 'react';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import iconBack from '../images/botao-voltar.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      Toastify({
        text: "Preencha todos os campos!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF5733",
        stopOnFocus: true
      }).showToast();
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password: password,
      });

      console.log('Token recebido:', response.data.token);


      localStorage.setItem('authToken', response.data.token);

      Toastify({
        text: "Login bem-sucedido!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "green",
        stopOnFocus: true
      }).showToast();

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      if (error.response) {
        Toastify({
          text: error.response.data.message || "Erro ao fazer login!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#FF5733",
          stopOnFocus: true
        }).showToast();
      } else {
        Toastify({
          text: "Erro ao conectar com o servidor!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#FF5733",
          stopOnFocus: true
        }).showToast();
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cor3">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-sm flex flex-col items-center">
        <Link to='/' className="mb-4">
          <img src={iconBack} alt="Voltar" className="w-10 h-10 mr-72" />
        </Link>


        <h1 className="text-cor1 text-center text-2xl font-semibold mb-6">Login</h1>

        <div className="w-full mb-4">
          <label htmlFor="lemail" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="lemail"
            name="lemail"
            placeholder="Email@gmail.com"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="lsenha" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            id="lsenha"
            name="lsenha"
            placeholder="Senha"
            required
            maxLength="10"
            minLength="5"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Link to='/Register'className="text-sm text-cor6 hover:text-cor5 mb-4">
          Criar conta
        </Link>

        <div className="w-full flex justify-center mt-6">
          <input
            type="submit"
            value="Login"
            className="bg-cor3 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-cor3 transition duration-300 w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
