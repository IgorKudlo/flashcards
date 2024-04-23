import * as CheckboxRadix from '@radix-ui/react-checkbox';
import CheckboxUnSelected from '@/assets/images/checkbox-unselected.svg';
import CheckboxSelected from '@/assets/images/checkbox-selected.svg';
import s from './checkbox.module.scss';
import { Typography } from '@/components';

export type CheckboxProps = {
  id: string
  label?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, id } = props;

  return (
    <div className={s.checkbox}>
      <CheckboxRadix.Root className={s.root} defaultChecked id={id}>
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
};