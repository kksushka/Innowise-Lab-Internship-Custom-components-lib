import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from '../components/Switch/Switch';

const ControlledSwitch = (props?: Partial<React.ComponentProps<typeof Switch>>) => {
  const [checked, setChecked] = React.useState(false);

  return <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} {...props} />;
};

describe('Switch', () => {
  it('renders unchecked as default', () => {
    render(<ControlledSwitch />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('toggles when clicked', () => {
    render(<ControlledSwitch />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it('onChange when clicked', () => {
    const onChange = jest.fn();

    render(<Switch checked={false} onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('renders checked', () => {
    render(<Switch checked onChange={() => {}} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('renders disabled', () => {
    render(<Switch checked={false} disabled onChange={() => {}} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('not toggle when disabled', () => {
    render(<Switch checked={false} disabled onChange={() => {}} />);

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
});
