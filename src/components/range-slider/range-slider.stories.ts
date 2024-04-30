import type { Meta, StoryObj } from '@storybook/react';
import { RangeSlider } from './range-slider';

const meta = {
  title: 'Components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs']
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    min: 2,
    max: 10,
    up: 10
  }
};