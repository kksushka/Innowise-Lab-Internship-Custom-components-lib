import React from 'react';
import { Switch } from './Switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => {
    return <Switch onChange={() => {}} />;
  },
};

export const Checked: Story = {
  render: () => {
    return <Switch onChange={() => {}} checked={true} />;
  },
};

export const Disabled: Story = {
  render: () => {
    return <Switch onChange={() => {}} disabled />;
  },
};

export const DisabledChecked: Story = {
  render: () => <Switch checked disabled onChange={() => {}} />,
};
