import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../login/styles.css';
import { MdLock, MdForum } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  
  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    const authenticationSuccessful = true;

    if (authenticationSuccessful) {

      navigate('/principal');
    }
  };

  return (
    <div className="PgLogin">
      <div className="login-right">
        <h1>A U T E N T I C A Ç Ã O</h1>

        <div className="login-loginInputEmail">
          <MdForum />
          <input
            type="text"
            placeholder="Digite um usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login-loginInputPassword">
          <MdLock />
          <input
            placeholder="Digite sua senha"
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login-eye" onClick={handleClick}>
            {show ? <HiEye size={20} /> : <HiEyeOff size={20} />}
          </div>
        </div>

        <button type="submit" onClick={handleSubmit}>
          E N T R A R
        </button>
      </div>
    </div>
  );
}

export default Login;
