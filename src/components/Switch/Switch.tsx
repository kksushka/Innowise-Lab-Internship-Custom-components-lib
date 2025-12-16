import React from 'react';
import clsx from 'clsx';
import styles from './Switch.module.scss';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Switch = ({ checked, onChange, disabled = false, ...props }: SwitchProps) => {
  return (
    <label className={clsx(styles.switch, disabled && styles.disabled)}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} {...props} />
      <span className={styles.slider} />
    </label>
  );
};
