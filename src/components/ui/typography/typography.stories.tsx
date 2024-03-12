import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs']
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>

export const AllTypography: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1'
  },
  render: () => <div style={{
    display:'flex',
    flexDirection: 'column'
  }}>
    <Typography as={'h1'} variant={'h1'}>Heading 1</Typography>
    <Typography as={'h2'} variant={'h2'}>Heading 2</Typography>
    <Typography as={'h3'} variant={'h3'}>Heading 3</Typography>
    <Typography as={'h4'} variant={'h4'}>Heading 4</Typography>
    <Typography variant={'body1'}>Body 1</Typography>
    <Typography variant={'body2'}>Body 2</Typography>
    <Typography variant={'subtitle1'}>Subtitle 1</Typography>
    <Typography variant={'subtitle2'}>Subtitle 2</Typography>
    <Typography variant={'caption'}>Caption</Typography>
    <Typography variant={'overline'}>Overline</Typography>
    <Typography as={'a'} variant={'link1'}>Link 1</Typography>
    <Typography as={'a'} variant={'link2'}>Link 2</Typography>
  </div>
};
