import React, { ComponentPropsWithoutRef } from 'react';
import s from './button.module.scss';

export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  startIcon?: React.ReactNode
} & ComponentPropsWithoutRef<'button'>

export const Button = ({ className, fullWidth, variant = 'primary', startIcon, ...rest }: ButtonProps) => {
  return (
    <button
      className={`
        ${s.button} ${s[variant]} 
        ${fullWidth ? s.fullWidth : ''} 
        ${startIcon ? s.withIcon : ''} 
        ${className}
      `}
      {...rest}
    >
      {startIcon}
      {rest.children}
    </button>
  );
};
