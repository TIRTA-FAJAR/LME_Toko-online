import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register'
import '../assets/Login.css'


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
    alert('Login berhasil!');
  };

  return (
    <div className="login-container">
      <h2>Login</h2> <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text-white'>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email'
          />
        </div>
        <div>
          <label className='text-white'>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder='password'
          />
        </div>
        <div><button type="submit" class="login">Login</button></div>
       
      </form>
      <div className='regist'>
          <Link to="/register">
              <button className="register-button">Daftar disini</button>
          </Link>
          {/* Definisi Routing */}
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
    </div>
  );
};

export default Login;