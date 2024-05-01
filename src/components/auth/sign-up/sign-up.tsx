import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Input, Typography } from '@/components';
import s from './sign-up.module.scss';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  confirmPassword: z.string().min(3)
})
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don\'t match',
    path: ['confirmPassword']
  });

type FormValues = z.infer<typeof registerSchema>;

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h1'} className={s.header}>Sign Up</Typography>
        <Input
          {...register('email')}
          label={'Email'}
          className={s.email}
          error={errors.email?.message}
        />
        <Input
          {...register('password')}
          label={'Password'}
          type={'password'}
          className={s.password}
          error={errors.password?.message}
        />
        <Input
          {...register('confirmPassword')}
          label={'Confirm Password'}
          type={'password'}
          className={s.confirmPassword}
          error={errors.confirmPassword?.message}
        />
        <Button fullWidth type="submit" className={s.action}>Sign Up</Button>
        <div className={s.helpContent}>
          <Typography variant={'body2'} className={s.helpContentText}>Already have an account?</Typography>
          <Typography href={'#'} as={'a'} variant={'link1'}>Sign In</Typography>
        </div>
      </form>
    </Card>
  );
};

