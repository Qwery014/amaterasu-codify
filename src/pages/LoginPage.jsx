import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContextProvider';

const LoginPage = () => {
  const { login } = useContext(AuthContext);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const form = new FormData;
    form.append("email", email);
    form.append("password", password);

    login(form, email)
  }

  return (
    <div>
      <div className="container">
        <input type="email" placeholder='Почта' value={email} onInput={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Пароль' value={password} onInput={(e) => setPassword(e.target.value)}/>
        <Button onClick={handleLogin}>Войти</Button>
      </div>
    </div>
  );
};

export default LoginPage;