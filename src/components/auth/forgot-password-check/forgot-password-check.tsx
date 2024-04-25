import { Button, Card, Typography } from '@/components';
import CheckEmail from '@/assets/images/check-email.svg';
import s from './forgot-password-check.module.scss';

export const ForgotPasswordCheck = () => {
  return (
    <Card>
      <Typography variant={'h1'} className={s.header}>Check Email</Typography>
      <div className={s.icon}>
        <img src={CheckEmail} alt=""/>
      </div>
      <Typography
        variant={'body2'}
        className={s.helperText}>We’ve sent an Email with instructions to example@mail.com</Typography>
      <Button as={'a'} href={'#'} fullWidth>Back to Sign In</Button>
    </Card>
  );
};
