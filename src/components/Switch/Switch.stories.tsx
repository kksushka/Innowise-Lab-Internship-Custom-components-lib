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
    const [checked, setChecked] = React.useState(false);

    return <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
};

export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true);

    return <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
  },
};

export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return <Switch checked={checked} disabled onChange={(e) => setChecked(e.target.checked)} />;
  },
};

export const DisabledChecked: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(true);

    return <Switch checked={checked} disabled onChange={(e) => setChecked(e.target.checked)} />;
  },
};
