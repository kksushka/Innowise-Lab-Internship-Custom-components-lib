import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'contained',
    size: 'medium',
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};
