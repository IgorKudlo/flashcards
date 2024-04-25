import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, Card, Input, Typography } from '@/components';
import s from './forgot-password-form.module.scss';

const forgotPasswordSchema = z.object({
  email: z.string().email()
});

type FormValues = z.infer<typeof forgotPasswordSchema>;

export const ForgotPasswordForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(forgotPasswordSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h1'} className={s.header}>Forgot your password?</Typography>
        <Input
          {...register('email')}
          label={'Email'}
          className={s.email}
          error={errors.email?.message}
        />
        <Typography
          variant={'body2'}
          className={s.helperText}>Enter your email address and we will send you further instructions </Typography>
        <Button fullWidth type="submit" className={s.action}>Send Instructions</Button>
        <div className={s.helpContent}>
          <Typography variant={'body2'} className={s.helpContentText}>Did you remember your password?</Typography>
          <Typography href={'#'} as={'a'} variant={'link1'}>Try logging in</Typography>
        </div>
      </form>
    </Card>
  );
};
