import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import s from './dropdown.module.scss';
import { Typography } from '@/components';

type menuItem = {
  icon: string;
  text: string;
}

type Profile = {
  avatar: string;
  name: string;
  email: string;
}

export type DropdownProps = {
  dropdownMenu: menuItem[];
  variant: Profile | string
}

export const Dropdown = (props: DropdownProps) => {
  const { dropdownMenu, variant } = props;

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.trigger}>
          {typeof variant !== 'string' ? (
            <span className={s.avatar}>
              <img src={variant.name} alt="Avatar"/>
            </span>
          ) : <img src={variant} alt=""/>}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.dropdownMenu} sideOffset={12} align={'end'}>
          {typeof variant !== 'string' && (
            <div className={s.profile}>
              <span className={s.avatar}>
                <img src={variant.name} alt="Avatar"/>
              </span>
              <span className={s.profileContent}>
                <Typography variant={'subtitle2'}>{variant.name}</Typography>
                <Typography variant={'caption'} className={s.profileEmail}>{variant.email}</Typography>
              </span>
            </div>
          )}
          {dropdownMenu.map((menuItem: menuItem) => (
            <DropdownMenu.Item className={s.dropdownMenuItem}>
              <img src={menuItem.icon} alt=""/> <Typography variant={'caption'}>{menuItem.text}</Typography>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};