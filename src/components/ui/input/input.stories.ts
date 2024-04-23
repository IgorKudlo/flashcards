import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    disabled: false
  }
};

export const TextError: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    error: 'Error!',
    disabled: false
  }
};

export const Password: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
    disabled: false
  }
};

export const PasswordError: Story = {
  args: {
    label: 'Input',
    placeholder: 'Input',
    type: 'password',
    error: 'Error!',
    disabled: false
  }
};

export const Search: Story = {
  args: {
    placeholder: 'Input search',
    type: 'search',
    disabled: false
  }
};

export const SearchError: Story = {
  args: {
    placeholder: 'Input search',
    type: 'search',
    error: 'Error!',
    disabled: false
  }
};