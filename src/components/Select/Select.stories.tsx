import React, { ChangeEvent, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectProps, SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

const SelectWithState = (args: SelectProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return <Select {...args} value={value} onChange={handleChange} />;
};

const testOptions: SelectOption[] = [
  { label: 'None', value: '' },
  { label: 'Ten', value: 10 },
  { label: 'Twenty', value: 20 },
  { label: 'Thirty', value: 30 },
];

export const Default: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Age',
    options: testOptions,
  },
};

export const Filled: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Filled',
    variant: 'filled',
    options: testOptions,
  },
};

export const Standard: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Standard',
    variant: 'standard',
    options: testOptions,
  },
};

export const Outlined: Story = {
  render: (args) => <SelectWithState {...args} />,
  args: {
    label: 'Outlined',
    variant: 'outlined',
    options: testOptions,
  },
};
