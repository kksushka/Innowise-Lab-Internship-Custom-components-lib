import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox/Checkbox';

describe('Checkbox', () => {
  test('renders checkbox', () => {
    render(<Checkbox />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  test('renders label when provided', () => {
    render(<Checkbox label="Accept terms" />);

    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  test('checkbox checked', () => {
    render(<Checkbox />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
  });

  test('calls onChange', () => {
    const handleChange = jest.fn();

    render(<Checkbox onChange={handleChange} />);

    fireEvent.click(screen.getByRole('checkbox'));

    expect(handleChange).toHaveBeenCalled();
  });
});
