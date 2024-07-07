import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UsersTable } from './UsersTable';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../../theme/theme';

const meta: Meta<typeof UsersTable> = {
  title: 'table/UsersTable',
  component: UsersTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['UsersTable'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof UsersTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    users: [
      { email: 'jill@gmail.com', number: '822287' },
      { email: 'jill@gmail.com', number: '822286' },
    ],
  },
};
