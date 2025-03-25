import React from 'react';
import Register from '../component/Register';

const RegisterPage = ({ onRegister }) => {
  return (
    <div>
      <Register onRegister={onRegister} />
    </div>
  );
};

export default RegisterPage;
