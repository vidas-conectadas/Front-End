import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';




const TableHistory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState('');
  const [local, setLocal] = useState('');
  const [historicos, setHistoricos] = useState([]);
  const [userData, setUserData] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [noMoreData, setNoMoreData] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!token) {
      navigate('/Login');
    } else {
      fetchUserData();
      fetchHistoricos(page);
    }
  }, [token, navigate, page]);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data);
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
    }
  };

  const fetchHistoricos = async (pageNumber) => {
    try {
      const response = await axios.get('http://localhost:5000/api/auth/donations/history', {
        headers: { Authorization: `Bearer ${token}` },
        params: { page: pageNumber, limit: 5 },
      });
      setHistoricos(response.data.donations);
      setTotalPages(response.data.totalPages);
      setNoMoreData(response.data.donations.length === 0);
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/donations',
        { data_doacao: data, local },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 201) {
        setPage(1);
        fetchHistoricos(1);
        closeModal();
      }
    } catch (error) {
      console.error('Erro ao adicionar doação:', error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray min-h-screen p-5">
      <div className="container bg-white rounded-lg drop-shadow-2xl p-6 mt-5 max-w-lg w-full">
        <Link to='/' className="text-cor2">
          <FontAwesomeIcon icon={faArrowLeft} className="text-cor2 text-lg" />
        </Link>
        <div className="flex justify-between font-bold my-3">
          <p>{userData.nome} {userData.sobrenome}</p>
          <p>{userData.cpf}</p>
        </div>

        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-left">Data da Doação</th>
              <th className="border-b p-2 text-left">Local da Doação</th>
              <th className="border-b p-2 text-left">Próxima Doação</th>
            </tr>
          </thead>
          <tbody>
            {historicos.map((historico) => {
              const dataDoacao = new Date(historico.data_doacao);
              const anoDoacao = dataDoacao.getFullYear();
              const mesDoacao = String(dataDoacao.getMonth() + 1).padStart(2, '0');
              const diaDoacao = String(dataDoacao.getDate()).padStart(2, '0');
              const dataDoacaoFormatada = `${diaDoacao}-${mesDoacao}-${anoDoacao}`;

              const dataProximaDoacao = new Date(historico.next_donation);
              const ano = dataProximaDoacao.getFullYear();
              const mes = String(dataProximaDoacao.getMonth() + 1).padStart(2, '0');
              const dia = String(dataProximaDoacao.getDate()).padStart(2, '0');
              const dataApto = `${dia}-${mes}-${ano}`;

              return (
                <tr key={historico.id}>
                  <td className="border-b p-2">{dataDoacaoFormatada}</td>
                  <td className="border-b p-2">{historico.local}</td>
                  <td className="border-b p-2">{dataApto}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="flex justify-between mt-5">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="text-black py-2 px-4 rounded hover:text-cor2 underline"
          >
            ← Página Anterior
          </button>
          <span className="text-center">
            Página {page} de {totalPages}
          </span>
          <button
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="text-black py-2 px-4 rounded hover:text-cor2 underline"
          >
            Próxima Página →
          </button>
        </div>

        {noMoreData && page > 1 && (
          <p className="text-cor1 text-sm text-center mt-4">
            Não há mais doações para carregar.
          </p>
        )}

        <div className="text-center mt-5">
          <button onClick={openModal} className="bg-cor1 text-white py-2 px-4 rounded">
            Adicionar Nova Doação
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-5 max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Cadastrar</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="date" className="block mb-2">Data da doação:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="block w-full border-2 border-cor1 p-2 rounded mb-4"
                required
              />

              <label htmlFor="local" className="block mb-2">Local:</label>
              <input
                type="text"
                id="local"
                name="local"
                placeholder="Mario Gatti"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
                className="block w-full border-2 border-cor1 p-2 rounded mb-4"
                required
              />

              <button type="submit" className="bg-cor1 text-white w-full py-2 rounded">Cadastrar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableHistory;
