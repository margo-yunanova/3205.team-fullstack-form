import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme/theme';

const meta: Meta<typeof Form> = {
  title: 'form/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['form'],
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
