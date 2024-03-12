import s from './button.module.scss';
import { ComponentPropsWithoutRef, ElementType } from 'react';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { variant = 'primary', fullWidth = false, className, as: Component = 'button', ...rest } = props;
  return (
    <Component className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className ?? ''}`} {...rest} />
  );
};