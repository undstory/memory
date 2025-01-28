import React from 'react';
import './Button.scss';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
  return (

    <button
      className={className}
      onClick={onClick}
    >
      {label}
    </button>
  )
};

export default Button;
