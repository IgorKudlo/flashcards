import { Header } from '@/components';
import { Outlet } from 'react-router-dom';
import s from './main-layout.module.scss';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </>
  );
};