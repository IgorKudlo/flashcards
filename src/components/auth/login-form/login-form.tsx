import authCard from '../auth-card.module.scss';
import { Button } from '@/components/ui/button';
import { TextField } from '@/components/ui/text-field';
import { Card } from '@/components/ui/card';
import { Typography } from '@/components/ui/typography';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export const LoginForm = () => {
  const [isCheck, setIsCheck] = useState(false);

  const onChangeRememberMe = (checked: boolean) => {
    setIsCheck(checked);
  };

  return (
    <Card className={authCard.card}>
      <Typography as={'h1'} variant={'h1'} className={authCard.title}>Sign In</Typography>
      <form>
        <TextField label={'Email'} className={authCard.field} />
        <TextField label={'Password'} variant={'password'} className={authCard.field} />
        <Checkbox onChange={() => onChangeRememberMe} checked={isCheck} label={'Remember Me'} />
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