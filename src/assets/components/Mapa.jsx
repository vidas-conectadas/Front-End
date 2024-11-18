import React, { useEffect } from 'react'
import Input from '../components/Input'

function Mapa() {

    useEffect(() => {
        const cep = document.querySelector("input[name=cep]");

        cep.addEventListener('blur', e => {
            const value = cep.value.replace(/[^0-9]+/, '');
            const url = `https://viacep.com.br/ws/${value}/json/`;

            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (json.logradouro) {
                        document.querySelector('input[name=rua]').value = json.logradouro;
                        document.querySelector('input[name=bairro]').value = json.bairro;

                        // Mostrar o endereço no mapa
                        const address = `${json.logradouro}, ${json.bairro}, ${json.localidade}, ${json.uf}`;
                        showMap(address);
                    }
                });
        });
    }, []);


    function showMap(address) {
        // Usar a API do Google Maps para mostrar o endereço no mapa
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: -22.892032932237974, lng: -47.232708568744556 },
            zoom: 15,
        });

        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK") {
                map.setCenter(results[0].geometry.location);
                new window.google.maps.Marker({
                    map,
                    position: results[0].geometry.location,
                });
            } else {
                console.error("Geocode was not successful for the following reason: " + status);
            }
        });
    }


    return (
        <div className='flex justify-center pb-10'>
            <div className='bg-cor7 w-10/12 h-lvh flex flex-col items-center rounded-lg gap-7 pt-6 pb-6'>
                <h2 className='text-cor1 text-center font-bold'>Digite seu CEP e decubra o local mais próximo para doação</h2>
                <form id="form-cep" className='flex flex-col h-full w-8/12 justify-center gap-5' >

                    <div className='flex justify-center'>
                        <Input type="text" id="cep" name="cep" required />
                    </div>
                    <div className='flex flex-col items-center gap-1 tablet:flex-row tablet:gap-10 laptop:justify-between laptopL:justify-evenly'>
                        <Input label='Rua' type="text" id="rua" name="rua" required />
                        <Input label='Bairro' type="text" id="bairro" name="bairro" required />
                    </div>

                    <div id="map" className='h-full'>
                        <iframe
                            className=' h-full w-full '
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235237.00827445462!2d-47.232708568744556!3d-22.892032932237974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61de74b6325%3A0x17e53a6a2178c22a!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1727625572465!5m2!1spt-BR!2sbr"
                            allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Mapa


