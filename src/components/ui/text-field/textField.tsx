import s from './textField.module.scss';
import eye from '@/assets/images/eye.svg';
import search from '@/assets/images/search.svg';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Typography } from '@/components/ui/typography';

export type TextFieldPros = {
  label?: string;
  variant?: 'password' | 'search';
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldPros>((props, ref) => {
  const { label, variant, className, disabled = false, placeholder, error = false, errorMessage, ...rest } = props;

  const FieldPassword = () => (
    <div className={s['password-field']}>
      <input className={s.input} type='password' placeholder={placeholder} disabled={disabled} ref={ref} {...rest}/>
      <img className={s.icon} src={eye} alt=""/>
    </div>
  );

  const FieldSearch = () => (
    <div className={s['search-field']}>
      <img className={s.icon} src={search} alt=""/>
      <input className={s.input} type='search' placeholder={placeholder} disabled={disabled} ref={ref} {...rest}/>
    </div>
  );

  return (
    <div className={`${className ?? ''} ${s['text-field']} ${disabled ? s.disabled : ''} ${error ? s.error : ''}`}>
      {label && <Typography as={'label'} className={s.label}>{label}</Typography>}
      {!variant && <input className={s.input} type='text' placeholder={placeholder} disabled={disabled} ref={ref} {...rest}/>}
      {variant === 'password' && <FieldPassword/>}
      {variant === 'search' && <FieldSearch/>}
      {errorMessage && <span className={s['error-message']}>{errorMessage}</span>}
    </div>
  );
});