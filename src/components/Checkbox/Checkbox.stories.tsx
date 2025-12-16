import { Checkbox } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

interface InteractiveCheckboxProps {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

const InteractiveCheckbox = ({
  label,
  defaultChecked = false,
  disabled = false,
}: InteractiveCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <Checkbox
      label={label}
      checked={isChecked}
      disabled={disabled}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};

export const Checked: Story = {
  render: (args) => <InteractiveCheckbox {...args} defaultChecked={true} />,
  args: {
    label: 'Label',
  },
};

export const Unchecked: Story = {
  render: (args) => <InteractiveCheckbox {...args} defaultChecked={false} />,
  args: {
    label: 'Required',
  },
};

export const Disabled: Story = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const DisabledAndChecked: Story = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: 'Disabled and Checked',
    checked: true,
    disabled: true,
  },
};
