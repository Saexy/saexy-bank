import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const handleClickHome = () => {
        navigate(`/`)
    }

    const handleClickLogin = () => {
        navigate(`/login`)
    }

    return (
        <div className='navbar'>
            <a className="name" onClick={() => handleClickHome()}>Saexy Bank</a>
            <div className="list">
                <a className='normal' onClick={() => handleClickHome()}>Home</a>
                <a className='normal' href='#about'>Sobre</a>
                <a className='normal'>Vagas</a>
                <a className='sign' onClick={() => handleClickLogin()}>ENTRAR</a>
            </div>
        </div>
    )
}
 
export default Navbar