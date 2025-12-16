import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextField>;

export const Outlined: Story = {
  args: {
    label: 'Name',
    variant: 'outlined',
  },
};

export const Filled: Story = {
  args: {
    label: 'Email',
    variant: 'filled',
  },
};

export const Standard: Story = {
  args: {
    label: 'Username',
    variant: 'standard',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    variant: 'outlined',
    error: true,
  },
};
