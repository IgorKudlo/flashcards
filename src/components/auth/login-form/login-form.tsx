import authCard from '../auth-card.module.scss';
import { useController, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components/ui/text-field';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Checkbox } from '@/components/ui/checkbox';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false)
});

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const {
    field: { value, onChange }
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false
  });

  return (
    <Card className={authCard.card}>
      <Typography as={'h1'} variant={'h1'} className={authCard.title}>Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('email')}
          label={'Email'}
          className={authCard.field}
          errorMessage={errors.email?.message}
        />
        <TextField
          {...register('password')}
          label={'Password'}
          variant={'password'}
          className={authCard.field}
          errorMessage={errors.password?.message}
        />
        <Checkbox onChange={onChange} checked={value} label={'Remember Me'} />
        <Typography variant={'body2'} className={authCard['right-text']}>Forgot Password?</Typography>
        <Button type="submit" fullWidth className={authCard.button}>Submit</Button>
        <Typography variant={'body2'} className={authCard['center-text']}>Don't have an account?</Typography>
        <div className={authCard['center-link']}>
          <Typography as={'a'} variant={'link1'} className={authCard.link}>Sign Up</Typography>
        </div>
      </form>
    </Card>
  );
};