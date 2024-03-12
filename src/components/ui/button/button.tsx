import s from './button.module.scss';
import { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<'button'>;


export const Button = ({ variant = 'primary', fullWidth = false, className, ...rest }: ButtonProps) => {
  return (
    <button className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className ?? ''}`} {...rest} />
  );
};