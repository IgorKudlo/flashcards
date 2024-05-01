import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Card, Input, Typography } from '@/components';
import s from './create-password.module.scss';

const forgotPasswordSchema = z.object({
  password: z.string().min(3)
});

type FormValues = z.infer<typeof forgotPasswordSchema>;

export const CreatePassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h1'} className={s.header}>Create new password</Typography>
        <Input
          {...register('password')}
          label={'Password'}
          className={s.password}
          error={errors.password?.message}
        />
        <Typography
          variant={'body2'}
          className={s.helperText}>Create new password and we will send you further instructions to email</Typography>
        <Button fullWidth type="submit" className={s.action}>Create New Password</Button>
      </form>
    </Card>
  );
};
