import s from './checkbox.module.scss';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef } from 'react';
import { Typography } from '@/components/ui/typography';
import checkboxSelected from '@/assets/checkbox-selected.svg';
import checkboxUnselected from '@/assets/checkbox-unselected.svg';

export type CheckboxProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  id?: string;
  name?: string;
  onChange: (checked: boolean) => void;
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = (props: CheckboxProps) => {
  const { label, checked = false, onChange, name, className, disabled } = props;

  return (
    <label className={`${s.checkbox} ${className ?? ''} ${disabled ? s.disabled : ''}`}>
      <CheckboxRadix.Root className={s.indicator} checked={checked} onCheckedChange={onChange} name={name}>
        <CheckboxRadix.Indicator className={s.selected}>
          {checked && <img src={checkboxSelected} alt=""/>}
        </CheckboxRadix.Indicator>
        <img src={checkboxUnselected} alt=""/>
      </CheckboxRadix.Root>
      {label &&
            <Typography
              className={s.label}
              as={'span'}
              variant={'body2'}
            >{label}</Typography>
      }
    </label>
  );
};