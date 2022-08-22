import React from 'react';

import BackLogin from '../../assets/images/back-login.webp'

import Input from '../../components/Input'

import './style.css'

const Login = () => {
    return (
    <div className='login'>
        <div className="sidelogin">
            <div className="content">
                <div className="texts">
                    <div className="title">SaexyBank</div>
                    <div className="subtitle">Login</div>
                </div>
                <div className="data">
                    <Input type="text" theme="dark" width="80%" label="Email:" placeholder="email@email.com"/>
                    <Input type="password" theme="dark" width="80%" label="Senha:"/>
                    <a className='login'>ENTRAR</a>
                    <a className="esqueceu">Esqueci a senha</a>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={BackLogin} alt="" />
        </div>
    </div>
    );
}
 
export default Login;