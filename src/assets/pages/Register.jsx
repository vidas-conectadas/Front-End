import React, { useState } from 'react';
import axios from 'axios';
import iconBack from '../images/botao-voltar.png'
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [doador, setDoador] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!nome || !sobrenome || !email || !cpf || !password || doador === '') {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        nome,
        sobrenome,
        email,
        cpf,
        password,
        doador
      });

      if (response.status === 201) {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Erro ao criar usuário!');
      }
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cor3">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-sm flex flex-col items-center">

        <Link to='/' className="mb-4">
          <img src={iconBack} alt="Voltar" className="w-10 h-10 mr-72" />
        </Link>

        <h1 className="text-cor1 text-center text-2xl font-semibold mb-6">Cadastro</h1>

        <div className="w-full mb-4">
          <label htmlFor="fname" className="block text-sm font-medium text-gray-700">Nome*</label>
          <input
            type="text"
            id="fname"
            name="fname"
            maxLength="10"
            minLength="3"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="lsobrenome" className="block text-sm font-medium text-gray-700">Sobrenome*</label>
          <input
            type="text"
            id="lsobrenome"
            name="lsobrenome"
            maxLength="10"
            minLength="3"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="lemail" className="block text-sm font-medium text-gray-700">Email*</label>
          <input
            type="email"
            id="lemail"
            name="lemail"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF*</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            maxLength={14}
            minLength={14}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="lsenha" className="block text-sm font-medium text-gray-700">Senha*</label>
          <input
            type="password"
            id="lsenha"
            name="lsenha"
            required
            maxLength="10"
            minLength="5"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <label className="text-sm text-gray-700">Já é doador?</label>
          <div>
            <input
              type="radio"
              id="sim"
              name="radio"
              value="sim"
              required
              className="mr-2"
              onChange={(e) => setDoador(e.target.value)}
            />
            <label htmlFor="sim" className="text-sm text-gray-700">Sim</label>
          </div>
          <div>
            <input
              type="radio"
              id="nao"
              name="radio"
              value="nao"
              required
              className="mr-2"
              onChange={(e) => setDoador(e.target.value)}
            />
            <label htmlFor="nao" className="text-sm text-gray-700">Não</label>
          </div>
        </div>

        <Link to='/Login'>
          <p id="acesso" className="text-sm text-cor6 hover:text-cor5">Acesse aqui se já for cadastrado</p>
        </Link>
        
        <div className="w-full flex justify-center mt-6">
          <input
            type="submit"
            value="Cadastrar"
            className="bg-cor3 text-white px-6 py-2 rounded-md cursor-pointer hover:bg-cor3 transition duration-300"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
