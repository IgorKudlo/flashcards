import React, { ComponentPropsWithoutRef, ElementType } from 'react';
import s from './button.module.scss';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  startIcon?: React.ReactNode
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    className,
    fullWidth,
    variant = 'primary',
    startIcon,
    as: Component = 'button',
    ...rest
  } = props;
  return (
    <Component
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
    </Component>
  );
};
