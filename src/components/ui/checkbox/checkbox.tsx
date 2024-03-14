import s from './checkbox.module.scss';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, useState } from 'react';
import { Typography } from '@/components/ui/typography';
import checkboxSelected from '@/assets/checkbox-selected.svg';
import checkboxUnselected from '@/assets/checkbox-unselected.svg';

export type CheckboxProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  onChange: (checked: boolean) => void;
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = (props: CheckboxProps) => {
  const { label, checked = false, onChange, className, disabled } = props;
  const [isChecked, setIsChecked] = useState<boolean | 'indeterminate'>(checked ? checked : 'indeterminate');

  const onChangeCheckbox = () => {
    setIsChecked((prevIsChecked) =>
      (prevIsChecked === 'indeterminate' || !prevIsChecked) ? true : 'indeterminate'
    );
    if (isChecked === 'indeterminate') {
      onChange(false);
    } else  {
      onChange(isChecked);
    }
  };

  return (
    <div className={`${s.checkbox} ${className ?? ''} ${disabled ? s.disabled : ''}`}>
      <CheckboxRadix.Root className={s.indicator} checked={isChecked} onCheckedChange={setIsChecked}>
        <CheckboxRadix.Indicator>
          {isChecked === true && <img src={checkboxSelected} alt=""/>}
        </CheckboxRadix.Indicator>
        {(isChecked === 'indeterminate' || !isChecked) && <img src={checkboxUnselected} alt=""/>}
      </CheckboxRadix.Root>
      {label &&
          <Typography
            className={s.label}
            as={'button'}
            type={'button'}
            variant={'body2'}
            onClick={onChangeCheckbox}
          >{label}</Typography>
      }
    </div>
  );
};