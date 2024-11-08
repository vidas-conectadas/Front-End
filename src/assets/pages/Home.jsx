import React from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import imagem_requisitos from '../images/image 7.jpg'
import Cards from '../components/Cards'
import { FaShieldHeart } from "react-icons/fa6";
import group13 from '../images/Group 13.jpg'
import Input from '../components/Input'
import imagem from '../images/image 2.jpg'
import Beneficios from '../images/Beneficios.jpg'

// import { useState } from 'react'


// const [cep, setCep] = useState('')
// const [bairro, setBairro] = useState('')
// const [rua, setRua] = useState('')

// const buscar = (e) => {
//     e.preventDefault();

//     console.log('Nome:', nome)
//     console.log("Imagem", imagem)
//     console.log("Data de nascimento", dataNascimento)


function Home() {
    return (
        <div className=''>
            <Header />
            <picture>
                <img src={imagem} className='' alt="" />
            </picture>

            <div className='flex p-10 justify-evenly'>
                <Cards titulo={'Incetivar outros a doar'} icone={<FaShieldHeart />} rosa='rosa' texto={'Sua ação pode inspirar amigos, familiares e colegas a também se tornarem doadores, ampliando o impacto positivo e aumentando a quantidade de sangue disponível para quem precisa.'}></Cards>
                <Cards titulo={'Salvar vidas'} icone={<FaShieldHeart />} azul='azul' texto={'O processo de doação é relativamente rápido e seguro. Os riscos são mínimos, e as agências de coleta seguem rigorosos protocolos de segurança e higiene.'}></Cards>
                <Cards titulo={'Incetivar outros a doar'} icone={<FaShieldHeart />} rosa='rosa' texto={'Sua ação pode inspirar amigos, familiares e colegas a também se tornarem doadores, ampliando o impacto positivo e aumentando a quantidade de sangue disponível para quem precisa.'}></Cards>
                <Cards titulo={'Testar a saúde'} icone={<FaShieldHeart />} azul='azul' texto={'Antes de doar sangue, você passa por uma triagem que inclui testes de saúde básicos. Isso pode ser uma forma de monitorar a sua própria saúde e identificar problemas potenciais.'}></Cards>
            </div>


            <div className='pb-12'>
                <picture>
                    <img src={group13} alt="" />
                </picture>
            </div>


            <div className='flex justify-center'>
                <div className='bg-cor7 w-10/12 h-lvh flex flex-col items-center rounded-lg gap-7 pt-6 pb-6'>
                    <h2 className='text-cor1 font-bold'>Digite seu CEP e decubra o local mais próximo para doação</h2>
                    <form id="form-cep" className='flex flex-col h-full w-8/12 justify-center gap-5' >
                        <div className='flex justify-center'>
                            <Input type="text" id="cep" name="cep" required />
                        </div>
                        <div className='flex justify-center gap-14'>
                            <Input label='Endereço' type="text" id="rua" name="rua" required />
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



            <div className='flex flex-col items-center gap-10 pt-12'>
                <Title h1='REQUISITOS BÁSICOS PARA DOAR' />
                <div className='flex justify-around '>
                    <img src={imagem_requisitos} alt="" />

                    <div className='flex flex-col text-lg font-semibold pl-10 pr-10'>
                        <ul className='flex flex-col gap-7'>
                            <li className='list-disc'>
                                Ter idade entre 16 e 69 anos, (menores de 18 anos devem apresentar consentimento formal do responsável legal);
                            </li>
                            <li className='list-disc'>
                                Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.
                            </li>
                            <li className='list-disc'>
                                Apresentar documento de identificação com foto emitido por órgão oficial (Carteira de Identidade, Carteira Nacional de Habilitação, Carteira de Trabalho, Passaporte, Registro Nacional de Estrangeiro, Certificado de Reservista e Carteira Profissional emitida por classe). São aceitos documentos digitais com foto.
                            </li>
                            <li className='list-disc'>
                                Pesar no mínimo 50 kg.
                            </li>
                            <li className='list-disc'>
                                Ter dormido pelo menos 6 horas nas últimas 24 horas.
                            </li>
                            <li className='list-disc'>
                                Estar alimentado. Evitar alimentos gordurosos nas 3 horas que antecedem a doação de sangue. Caso seja após o almoço, aguardar 2 horas.
                            </li>
                            <li>
                                Para mais informações, ligue (19) 3272-5501 - Hemocentro Mário Gatti
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center gap-12 pt-12'>
                <Title h1='BENEFÍCIOS'></Title>
                <picture>
                    <img src={Beneficios} alt="" />
                </picture>
            </div>


            <div className='flex flex-col items-center mr-3 ml-3 gap-10 pt-12'>
                <Title h1='DÚVIDAS FREQUENTES'></Title>
                <div className='pb-5'>
                    <br />
                    <h3 className='font-semibold'>Quem tem tatuagem pode doar sangue?</h3>
                    <p>Sim, desde que tenha feito a tatuagem há mais de um ano.</p>
                    <br />
                    <h3 className='font-semibold'>Quem tem piercing pode doar sangue?</h3>
                    <p>Aguardar 12 meses após a data de realização ou 6 meses se o procedimento usou material estéril e/ou
                        descartável.<br />
                        Se o piercing for na cavidade oral e/ou região genital, deve aguardar 1 ano após a retirada. </p>

                    <br />
                    <h3 className='font-semibold'>Quem tem procedimento estético pode doar sangue?</h3>
                    <p>O voluntário(a) que realizou qualquer procedimento estético recentemente precisa esperar alguns meses para
                        doar sangue.</p>
                    <br />
                    <h3 className='font-semibold'>Pode doar sangue menstruada?</h3>
                    <p>Sim. Não há nenhum problema quanto a isso.</p>

                    <br />
                    <h3 className='font-semibold'>Quem fuma pode doar sangue?</h3>
                    <p>Para quem fuma cigarro: O recomendável é um intervalo sem fumar de pelo menos 2 horas antes.
                        Para quem fuma maconha: Se for a única droga consumida, a doação de sangue é permitida desde que o candidato
                        não esteja sob o efeito da mesma. O uso de maconha impede a doação por 12 (doze) horas.</p>
                    <br />

                    <a href="https://www.hemocentro.fmrp.usp.br/canal-do-doador/duvidas-e-perguntas/">
                        <p className='font-semibold'>Clique aqui para mais informações.</p>
                    </a>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home 