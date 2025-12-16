import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  children,
  variant = 'contained',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...props}>
      {children}
    </button>
  );
};
