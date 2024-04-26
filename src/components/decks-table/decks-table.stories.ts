import type { Meta, StoryObj } from '@storybook/react';

import { DecksTable } from './decks-table';

const meta = {
  title: 'Components/DecksTable',
  component: DecksTable,
  tags: ['autodocs']
} satisfies Meta<typeof DecksTable>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    decks: [
      {
        id: '1',
        name: 'Deck 1',
        updated: '2024-04-26',
        cardsCount: 8,
        createdBy: 'User 1'
      },
      {
        id: '2',
        name: 'Deck 2',
        updated: '2024-03-18',
        cardsCount: 6,
        createdBy: 'User 2'
      }
    ]
  }
};