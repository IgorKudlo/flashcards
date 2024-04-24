import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import CheckboxUnSelected from '@/assets/images/checkbox-unselected.svg';
import CheckboxSelected from '@/assets/images/checkbox-selected.svg';
import { Typography } from '@/components';
import s from './checkbox.module.scss';

export type CheckboxProps = {
  id: string
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>;

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { label, id, className, checked, ...restProps } = props;

    return (
      <div className={`${className ?? ''} ${s.checkbox}`}>
        <CheckboxRadix.Root className={s.root} id={id} ref={ref} checked={checked} {...restProps}>
          <img className={s.checkboxUnselected} src={CheckboxUnSelected} alt=""/>
          <CheckboxRadix.Indicator className={s.indicator}>
            <img src={CheckboxSelected} alt=""/>
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        {label &&
          <Typography
            as="label"
            variant="body2"
            className={s.label}
            htmlFor={id}
          >{label}</Typography>}
      </div>
    );
  });