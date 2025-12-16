import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../components/Modal/Modal';

describe('Modal Component', () => {
  it('no render when open is false', () => {
    render(
      <Modal open={false} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('render when open is true', () => {
    render(
      <Modal open onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>,
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('call onClose when backdrop is clicked', () => {
    const onClose = jest.fn();

    const { container } = render(
      <Modal open onClose={onClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    const backdrop = container.ownerDocument.body.querySelector('.backdrop') as HTMLElement;

    fireEvent.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('not call onClose when modal content is clicked', () => {
    const onClose = jest.fn();

    render(
      <Modal open onClose={onClose}>
        <div>Modal Content</div>
      </Modal>,
    );

    fireEvent.click(screen.getByText('Modal Content'));

    expect(onClose).not.toHaveBeenCalled();
  });
});
