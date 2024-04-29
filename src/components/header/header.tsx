import { Button } from '@/components';
import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div>Logo</div>
        <div className="account">
          <Button variant={'secondary'} as={'a'}>Sign In</Button>
        </div>
      </div>
    </header>
  );
};