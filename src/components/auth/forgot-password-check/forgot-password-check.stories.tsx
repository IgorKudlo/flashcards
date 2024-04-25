import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordCheck } from './forgot-password-check';

const meta = {
  title: 'Auth/ForgotPasswordCheck',
  component: ForgotPasswordCheck,
  tags: ['autodocs']
} satisfies Meta<typeof ForgotPasswordCheck>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {};