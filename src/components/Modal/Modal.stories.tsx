import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import React, { useState } from 'react';
import styles from './Modal.module.scss';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Modal>;

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.textButton} onClick={() => setOpen(true)}>
        Open modal
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Text in a modal</h2>
        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalExample />,
};
