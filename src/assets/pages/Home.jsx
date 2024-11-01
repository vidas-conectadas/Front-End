import React from 'react'
import Header from '../components/Header'
import image2maior from '../images/image2maior.png'
import Title from '../components/Title'
import Footer from '../components/Footer'
import imagem_requisitos from '../images/image 7.jpg'
import Cards from '../components/Cards'
import { FaShieldHeart } from "react-icons/fa6";
import group13 from '../images/Group13.jpg'
import Input from '../components/Input'



function Home() {
    return (
        <div className=' '>
            <Header />
            <picture>
                <img src={image2maior} className='' alt="" />
            </picture>

            <div className='flex gap-5 p-10 justify-center'>
                <Cards titulo={'Incetivar outros a doar'} icone={<FaShieldHeart />} rosa='rosa' texto={'Sua ação pode inspirar amigos, familiares e colegas a também se tornarem doadores, ampliando o impacto positivo e aumentando a quantidade de sangue disponível para quem precisa.'}></Cards>
                <Cards titulo={'Salvar vidas'} icone={<FaShieldHeart />} azul='azul' texto={'O processo de doação é relativamente rápido e seguro. Os riscos são mínimos, e as agências de coleta seguem rigorosos protocolos de segurança e higiene.'}></Cards>
                <Cards titulo={'Incetivar outros a doar'} icone={<FaShieldHeart />} rosa='rosa' texto={'Sua ação pode inspirar amigos, familiares e colegas a também se tornarem doadores, ampliando o impacto positivo e aumentando a quantidade de sangue disponível para quem precisa.'}></Cards>
                <Cards titulo={'Testar a saúde'} icone={<FaShieldHeart />} azul='azul' texto={'Antes de doar sangue, você passa por uma triagem que inclui testes de saúde básicos. Isso pode ser uma forma de monitorar a sua própria saúde e identificar problemas potenciais.'}></Cards>
            </div>


            <div>
                <picture>
                    <img src={group13} alt="" />
                </picture>
            </div>

            <div className='flex justify-center'>
                <div className='bg-cor7 w-7/12 flex flex-col items-center gap-4'>
                    <h2 className='text-cor1 font-semibold'>Digite seu CEP e decubra o local mais próximo para doação</h2>
                    {/* <input type="number" className='border-2 border-cor4 w-72' /> */}
                    
                    <Input label='teste' />
                    <div className='flex flex-col'>
                        {/* <label className='text-cor1 font-semibold'>Endereço</label>
                        <input type="text" name="" id="" className='border-2 border-cor4' />

                        <label className='text-cor1 font-semibold'>Bairro</label>
                        <input type="text" name="" id="" className='border-2 border-cor4' /> */}
                    </div>
                </div>
            </div>




            <div className='flex flex-col items-center mr-3 ml-3 gap-10'>
                <Title h1='REQUISITOS PARA DOAR' />
                <div className='flex justify-around border-4 border-cor8'>
                    <img src={imagem_requisitos} alt="" />

                    <div >
                        <ul >
                            <li>
                                - Ter idade entre 16 e 69 anos, (menores de 18 anos devem apresentar consentimento formal do
                                responsável
                                legal);
                            </li>
                            <li>
                                - Pessoas com idade entre 60 e 69 anos só poderão doar sangue se já o tiverem feito antes dos 60 anos.
                            </li>
                            <li>
                                - Apresentar documento de identificação com foto emitido por órgão oficial (Carteira de Identidade,
                                Carteira Nacional de Habilitação, Carteira de Trabalho, Passaporte, Registro Nacional de
                                Estrangeiro,
                                Certificado de Reservista e Carteira Profissional emitida por classe). São aceitos documentos
                                digitais
                                com foto.
                            </li>
                            <li>
                                - Pesar no mínimo 50 kg.
                            </li>
                            <li>
                                - Ter dormido pelo menos 6 horas nas últimas 24 horas.
                            </li>
                            <li>
                                - Estar alimentado. Evitar alimentos gordurosos nas 3 horas que antecedem a doação de sangue. Caso
                                seja
                                após o almoço, aguardar 2 horas.
                            </li>
                        </ul>
                        <p className='font-bold'> Para mais informações, ligue (19) 3272-5501 - Hemocentro Mário Gatti</p>
                    </div>
                </div>
            </div>



            <div className='flex flex-col items-center mr-3 ml-3 gap-10'>
                <Title h1='DÚVIDAS FREQUENTES'></Title>
                <div className=''>
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
                    <p className='font-semibold'>Para mais informações, acesse o link.</p>
                    <p >https://www.hemocentro.fmrp.usp.br/canal-do-doador/duvidas-e-perguntas/</p>

                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home