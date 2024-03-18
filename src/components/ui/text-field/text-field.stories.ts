import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './text-field';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs']
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input'
  }
};

export const Password: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    variant: 'password'
  }
};

export const Search: Story = {
  args: {
    placeholder: 'Input search',
    variant: 'search'
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    disabled: true
  }
};

export const Error: Story = {
  args: {
    placeholder: 'Input',
    label: 'Input',
    error: true,
    errorMessage: 'Error!'
  }
};