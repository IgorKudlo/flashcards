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
  render: () => (
    <>
      h1: <Typography variant="h1">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      h2: <Typography variant="h2">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      h3:<Typography variant="h3">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      h4: <Typography variant="h4">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      body1: <Typography variant="body1">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      subtitle1: <Typography variant="subtitle1">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      body2: <Typography variant="body2">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      subtitle2: <Typography variant="subtitle2">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      caption: <Typography variant="caption">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      overline: <Typography variant="overline">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      link1: <Typography variant="link1">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
      link2: <Typography variant="link2">
        Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH
      </Typography>
    </>
  )
};