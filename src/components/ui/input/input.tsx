import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import EyeIcon from '@/assets/images/eye.svg';
import SearchIcon from '@/assets/images/search.svg';
import s from './input.module.scss';

export type InputProps = {
  label?: string
  error?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type = 'text',
    label,
    className,
    disabled,
    error,
    ...restProps
  } = props;

  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleShowPassword = () => {
    setIsShowPassword(prevState => !prevState);
  };

  return (
    <div
      className={`
        ${s.input} ${className} 
        ${error ? s.error : ''} 
        ${disabled ? s.disabled : ''}
      `}
      {...restProps}
    >
      <div className={s.label}>{label}</div>
      <div className={`
        ${s.inputField}
        ${type === 'password' ? s.inputFieldPassword : ''} 
        ${type === 'search' ? s.inputFieldSearch : ''}
      `}>
        <input
          type={type === 'password' ? isShowPassword ? 'password' : 'text' : type}
          ref={ref}
          {...restProps}
        />
        {type === 'password' &&
            <img
              className={s.iconPassword}
              src={EyeIcon} alt="icon eye"
              onClick={handleShowPassword}/>}
        {type === 'search' && <img className={s.iconSearch} src={SearchIcon} alt="icon search"/>}
      </div>
      {error && <div className={s.errorMessage}>Error</div>}
    </div>
  );
});
