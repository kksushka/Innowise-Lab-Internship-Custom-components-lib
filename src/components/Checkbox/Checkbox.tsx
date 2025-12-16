import React from 'react';
import styles from './Checkbox.module.scss';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label className={styles.wrapper}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
