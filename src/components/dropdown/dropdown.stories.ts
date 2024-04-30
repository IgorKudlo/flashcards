import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './dropdown';
import PersonOutline from '@/assets/images/person-outline.svg';
import LogOut from '@/assets/images/log-out.svg';
import PlayCircleOutline from '@/assets/images/play-circle-outline.svg';
import EditOutline from '@/assets/images/edit-outline.svg';
import Trash from '@/assets/images/trash.svg';
import MoreVertical from '@/assets/images/more-vertical.svg';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs']
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>

export const Profile: Story = {
  args: {
    dropdownMenu: [
      { text: 'My Profile', icon: PersonOutline },
      { text: 'Sign Out', icon: LogOut }
    ],
    variant: {
      avatar: '',
      name: 'Ivan',
      email: 'j&johnson@gmail.com'
    }
  }
};

export const Icon: Story = {
  args: {
    dropdownMenu: [
      { text: 'Learn', icon: PlayCircleOutline },
      { text: 'Edit', icon: EditOutline },
      { text: 'Delete', icon: Trash }
    ],
    variant: MoreVertical
  }
};