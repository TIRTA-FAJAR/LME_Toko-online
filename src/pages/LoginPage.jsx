import React from 'react';
import Login from '../component/Login';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <Login onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;
