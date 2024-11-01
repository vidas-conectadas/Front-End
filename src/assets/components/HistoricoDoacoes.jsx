import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';




const HistoricoDoacoes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    return (
        <div className="flex flex-col items-center bg-gray-100 min-h-screen p-5">

            <div className="container bg-white rounded-lg shadow-lg p-6 mt-5 max-w-lg w-full">
                <a href="logado-index-exemplo.html" className="text-red-600">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-red-600 text-lg" />
                </a>
                <div className="flex justify-between font-bold my-3">
                    <p>João da Silva</p>
                    <p>123.456.789-00</p>
                </div>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border-b p-2 text-left">Data da Doação</th>
                            <th className="border-b p-2 text-left">Local da Doação</th>
                            <th className="border-b p-2 text-left">Apto a Doar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b p-2">14-10-2024</td>
                            <td className="border-b p-2">Hospital Mario Gatti</td>
                            <td className="border-b p-2">15-11-2024</td>
                        </tr>
                        <tr>
                            <td className="border-b p-2">13-09-2024</td>
                            <td className="border-b p-2">Hospital Mario Gatti</td>
                            <td className="border-b p-2">14-10-2024</td>
                        </tr>
                        <tr>
                            <td className="border-b p-2">12-08-2024</td>
                            <td className="border-b p-2">Hospital Mario Gatti</td>
                            <td className="border-b p-2">13-09-2024</td>
                        </tr>
                        <tr>
                            <td className="border-b p-2">11-07-2024</td>
                            <td className="border-b p-2">Hospital Mario Gatti</td>
                            <td className="border-b p-2">12-08-2024</td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center mt-5">
                    <button onClick={openModal} className="bg-red-600 text-white py-2 px-4 rounded">
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
                        <form>
                            <label htmlFor="date" className="block mb-2">Data da doação:</label>
                            <input type="date" id="date" name="date" className="block w-full border-2 border-red-600 p-2 rounded mb-4" />
                            <label htmlFor="local" className="block mb-2">Local:</label>
                            <input type="text" id="local" name="local" placeholder="Mario Gatti" className="block w-full border-2 border-red-600 p-2 rounded mb-4" />
                            <button type="submit" className="bg-red-600 text-white w-full py-2 rounded">Cadastrar</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistoricoDoacoes 