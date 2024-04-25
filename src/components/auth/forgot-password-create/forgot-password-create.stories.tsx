import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordCreate } from './forgot-password-create';

const meta = {
  title: 'Auth/ForgotPasswordCreate',
  component: ForgotPasswordCreate,
  tags: ['autodocs']
} satisfies Meta<typeof ForgotPasswordCreate>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {};