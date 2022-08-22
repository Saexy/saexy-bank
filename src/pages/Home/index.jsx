import React from 'react'
import Navbar from '../../components/Navbar'

import Input from '../../components/Input'

import AproximacaoBlack from '../../assets/images/aproximacao_black.png'
import AproximacaoWhite from '../../assets/images/aproximacao_white.png'
import TransferMoney from '../../assets/images/transfer_money.svg'

import $ from "jquery"

import './style.css'

const Home = () => {

    const handleChangeName = (value) => {
        $(".front .cardname").html(value)
    }

    const handleClickCard = (color) => {
        $(".preview").removeClass("gold").removeClass("platinum").removeClass("black").addClass(color)
        if(color == "gold" || color == "black"){
            $(".front .chip img").prop("src", AproximacaoWhite)
        }
        if(color == "platinum"){
            $(".front .chip img").prop("src", AproximacaoBlack)
        }
    }

    return (
        <div className='home'>
            <Navbar />
            <div className="cardselection">
                <div className="preview gold">
                    <div className="front">
                        <div className="name">Saexy Bank</div>
                        <div className="chip">
                            <div className="chipblock"></div>
                            <img src={AproximacaoWhite} alt="" />
                        </div>
                        <div className="cardnumber">0000 0000 0000 0000</div>
                        <div className="cardname">NOME NO CARTÃO</div>
                        <div className="carddate">00/00</div>
                    </div>
                    <div className="back">
                        <div className="stripe"></div>
                    </div>
                </div>
                <div className="data">
                    <div className="title">SIMULE SEU CARTÃO DE CRÉDITO</div>
                    <Input type="text" theme="dark" width="60%" placeholder="Nome no cartão..." onChange={(e) => handleChangeName(e.target.value)}/>
                    <div className="cards">
                        <div className="card gold">
                            <div className="name">Gold</div>
                            <div className="block" onMouseOver={() => handleClickCard("gold")}></div>
                        </div>
                        <div className="card platinum">
                            <div className="name">Platinum</div>
                            <div className="block" onMouseOver={() => handleClickCard("platinum")}></div>
                        </div>
                        <div className="card black">
                            <div className="name">Black</div>
                            <div className="block" onMouseOver={() => handleClickCard("black")}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about" id='about'>
                <div className="title">QUEM SOMOS NÓS?</div>
                <div className="row">
                    <img src={TransferMoney} alt="" />
                    <div className="texts">
                        <div className="text">Somos uma empresa que visa sempre o atendimento ao cliente, a agilidade do software.</div>
                        <div className="text">O SaexyBank é familia, é game, é investimento, é tudo, somos uma grande família.</div>
                        <div className="text">Nós possuimos plataformas diferenciadas de investimento, cursos online fornecidos por nós, de como guardar dinheiro, como investir seu dinheiro de forma rápida e segura.</div>
                        <div className="text">E tudo isso SEM TAXAS e SEM JUROS.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Home