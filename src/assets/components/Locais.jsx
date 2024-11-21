import React from 'react';

function Locais() {
    return (
        <div id="onde-doar" className="bg-cor1 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Locais para doação em Campinas</h2>

            <div className="flex justify-center items-center">
                <ul className="space-y-3 text-center">
                    <li>
                        <span className="block font-semibold">Hemocentro de Campinas</span>
                        <span>Rua Vital Brasil, 2, Cidade Universitária</span>
                    </li>
                    <li>
                        <span className="block font-semibold">Hospital de Câncer de Barretos - Campinas</span>
                        <span>Rua Tiradentes, 215, Centro</span>
                    </li>
                    <li>
                        <span className="block font-semibold">Posto de Coleta de Sangue - Campinas Shopping</span>
                        <span>Avenida Irmãos Bueno, 2200, Jardim do Trevo</span>
                    </li>
                </ul>
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={function () {
                        window.location.href = 'https://www.hemocentro.unicamp.br/categoria/locais-de-coleta/';
                    }}
                    className="bg-white text-cor4 font-semibold py-2 px-6 rounded-lg hover:bg-red-100 transition duration-300"
                >
                    Veja mais
                </button>
            </div>
        </div>
    );
}


export default Locais;