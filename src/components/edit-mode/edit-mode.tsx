import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@/components';
import s from './edit-mode.module.scss';
import { ChangeEvent, useState } from 'react';

export type EditModeProps = {
  inputLabel: string
  buttonText: string
  nickName: string
  handleName?: (name: string) => void
}

const nameSchema = z.object({
  name: z.string()
});

type FormValues = z.infer<typeof nameSchema>;

export const EditMode = (props: EditModeProps) => {
  const { inputLabel, buttonText, nickName, handleName } = props;
  const [name, setName] = useState(nickName);

  const onChangeName = (e: ChangeEvent<HTMLInputElement> ) => {
    const value = e.currentTarget.value;
    setName(value);
    handleName && handleName(value);
  };

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(nameSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label={inputLabel}
        className={s.field}
        {...register('name')}
        error={errors.name?.message}
        value={name}
        onChange={onChangeName}
      />
      <Button type={'submit'} fullWidth>{buttonText}</Button>
    </form>
  );
};