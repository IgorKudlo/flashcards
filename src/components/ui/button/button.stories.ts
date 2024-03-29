import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    fullWidth: false,
    disabled: false
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    fullWidth: false,
    disabled: false
  }
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Primary Button',
    fullWidth: true,
    disabled: false
  }
};