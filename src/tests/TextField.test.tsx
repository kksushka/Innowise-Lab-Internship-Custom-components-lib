import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextField } from '../components/TextField/TextField';

const ControlledTextField = () => {
  const [value, setValue] = React.useState('');

  return (
    <TextField
      label="Username"
      placeholder="Enter username"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

describe('TextField', () => {
  it('renders input and label', () => {
    render(<TextField label="Name" placeholder="Enter name" onChange={() => {}} />);

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  it('updates value when typing', () => {
    render(<ControlledTextField />);

    const input = screen.getByPlaceholderText('Enter username') as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: 'test_user' },
    });

    expect(input.value).toBe('test_user');
  });

  it('applies error', () => {
    render(<TextField label="Email" error placeholder="Enter email" onChange={() => {}} />);

    const input = screen.getByPlaceholderText('Enter email');
    expect(input.parentElement?.parentElement).toHaveClass('error');
  });

  it('calls onFocus and onBlur', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <TextField
        label="Name"
        placeholder="Enter name"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={() => {}}
      />,
    );

    const input = screen.getByPlaceholderText('Enter name');

    fireEvent.focus(input);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  it('shrinks label when value exists', () => {
    render(<TextField label="Name" value="Kseniya" placeholder="Enter name" onChange={() => {}} />);

    const label = screen.getByText('Name');
    expect(label).toHaveClass('labelShrink');
  });
});
