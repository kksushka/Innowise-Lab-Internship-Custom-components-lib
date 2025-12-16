import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../components/Select/Select';

const options = [
  { label: 'Ten', value: 10 },
  { label: 'Twenty', value: 20 },
];

const ControlledSelect = (props?: Partial<React.ComponentProps<typeof Select>>) => {
  const [value, setValue] = React.useState('');

  return (
    <Select
      label="Age"
      options={options}
      placeholder="Select age"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};

describe('Select', () => {
  it('renders placeholder and options', () => {
    render(<Select label="Age" options={options} placeholder="Select age" onChange={() => {}} />);

    expect(screen.getByText('Select age')).toBeInTheDocument();
    expect(screen.getByText('Ten')).toBeInTheDocument();
    expect(screen.getByText('Twenty')).toBeInTheDocument();
  });

  it('changes value when option is selected', () => {
    render(<ControlledSelect />);

    const select = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(select, {
      target: { value: '20' },
    });

    expect(select.value).toBe('20');
  });

  it('calls onChange when value changes', () => {
    const onChange = jest.fn();

    render(<Select label="Age" options={options} value="" onChange={onChange} />);

    const select = screen.getByRole('combobox');

    fireEvent.change(select, {
      target: { value: '10' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders disabled', () => {
    render(<Select label="Age" options={options} disabled onChange={() => {}} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  it('renders label', () => {
    render(<Select label="Age" options={options} onChange={() => {}} />);

    expect(screen.getByText('Age')).toBeInTheDocument();
  });
});
