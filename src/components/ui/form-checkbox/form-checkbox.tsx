import { Checkbox, CheckboxProps } from '@/components';
import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

type FormCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'name' | 'onCheckedChange' | 'checked' | 'ref' | 'onBlur'>;

export const FormCheckbox = <T extends FieldValues>(props: FormCheckboxProps<T>) => {
  const { control, name, ...restProps } = props;

  const { field: { ref, onChange, onBlur, value, disabled } } = useController({
    control,
    name
  });

  return (
    <Checkbox
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      checked={value}
      onCheckedChange={onChange}
      disabled={disabled}
      {...restProps}
    />
  );
};

