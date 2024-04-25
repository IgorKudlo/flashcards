import type { Meta, StoryObj } from '@storybook/react';

import { Tabs } from './';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: ['My Cards', 'All Cards']
  }
};