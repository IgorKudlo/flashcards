import { useController, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Checkbox, Input, Typography } from '@/components';
import s from './login-form.module.scss';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional()
});

type FormValues = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(loginSchema)
  });
  const { field: { name, ref, onChange, onBlur, disabled, value } } = useController({
    control,
    name: 'rememberMe',
    defaultValue: false
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant={'h1'} className={s.header}>Sign In</Typography>
        <Input
          {...register('email')}
          label={'Email'}
          className={s.email}
          error={errors.email?.message}
        />
        <Input
          {...register('password')}
          label={'Password'}
          type="password"
          className={s.password}
          error={errors.password?.message}
        />
        <Checkbox
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          checked={value}
          onCheckedChange={onChange}
          label={'remember me'}
          id={'remember-me'}
          className={s.rememberMe}
        />
        <Typography variant={'body2'} className={s.helpRightText}>Forgot Password?</Typography>
        <Button fullWidth type="submit" className={s.action}>Sign In</Button>
        <div className={s.helpContent}>
          <Typography variant={'body2'} className={s.helpContentText}>Don't have an account?</Typography>
          <Typography href={'#'} as={'a'} variant={'link1'}>Sign Up</Typography>
        </div>
      </form>
    </Card>
  );
};