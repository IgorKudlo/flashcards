import { useState } from 'react';
import { Button, Card, EditMode, Typography } from '@/components';
import EditIcon from '@/assets/images/edit.svg';
import LogOutIcon from '@/assets/images/log-out.svg';
import s from './profile.module.scss';

export const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditMode = () => setIsEditMode(prev => !prev);

  return (
    <Card>
      <Typography variant={'h1'} className={s.header}>Personal Information</Typography>
      <div className={s.avatar}>
        <div className={s.avatarMedia}>
          <img src="" alt=""/>
          {!isEditMode && <button type={'button'} className={s.avatarMediaEdit}>
            <img src={EditIcon} alt="edit"/>
          </button>}
        </div>
      </div>
      {!isEditMode && (<>
        <div className={s.name}>
          <Typography variant={'h2'}>Ivan</Typography>
          <button type={'button'} className={s.nameEdit} onClick={handleEditMode}>
            <img src={EditIcon} alt="edit"/>
          </button>
        </div>
        <Typography variant={'body2'} className={s.email}>j&johnson@gmail.com</Typography>
        <div className={s.action}>
          <Button variant={'secondary'} startIcon={<img src={LogOutIcon} aria-hidden alt=""/>}>Logout</Button>
        </div>
      </>)}
      {isEditMode && <EditMode inputLabel={'Nickmame'} buttonText={'Save Changes'} nickName={'Ivan'} />}
    </Card>
  );
};