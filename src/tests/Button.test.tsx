import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button/Button';

describe('Button', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies variant/size', () => {
    render(
      <Button variant="outlined" size="large">
        Test
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button.className).toMatch(/outlined/);
    expect(button.className).toMatch(/large/);
  });

  test('handles click event', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click</Button>);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('disabled', () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
