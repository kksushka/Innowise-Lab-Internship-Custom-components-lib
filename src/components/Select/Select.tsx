import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './Select.module.scss';

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: SelectOption[];
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  placeholder?: string;
}

export const Select = ({
  label,
  options = [],
  fullWidth = false,
  variant = 'outlined',
  value = '',
  placeholder = '',
  ...props
}: SelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  const hasValue = Boolean(value && value !== '');

  return (
    <div
      className={clsx(
        styles.wrapper,
        fullWidth && styles.fullWidth,
        props.disabled && styles.disabled,
      )}
    >
      <div className={styles.selectWrapper}>
        <select
          ref={selectRef}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={clsx(
            styles.select,
            styles[variant],
            fullWidth && styles.fullWidth,
            (isFocused || hasValue) && styles.hasValue,
          )}
          {...props}
        >
          <option value="" hidden>
            {placeholder}
          </option>

          {options.map(({ value, label: optionLabel }) => (
            <option key={`${value}-${optionLabel}`} value={value}>
              {optionLabel}
            </option>
          ))}
        </select>

        {label && (
          <label
            className={clsx(styles.label, (isFocused || hasValue) && styles.labelShrink)}
            onClick={() => selectRef.current?.focus()}
          >
            {label}
          </label>
        )}

        <span className={styles.arrow} />
      </div>
    </div>
  );
};
