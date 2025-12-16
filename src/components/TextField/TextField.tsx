import clsx from 'clsx';
import styles from './TextField.module.scss';
import { useTextField } from './useTextField';

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
}

export const TextField = ({
  label,
  error = false,
  fullWidth = false,
  variant = 'outlined',
  value = '',
  ...props
}: TextFieldProps) => {
  const { inputRef, isFocused, hasValue, onFocus, onBlur } = useTextField(String(value));

  return (
    <div className={clsx(styles.wrapper, fullWidth && styles.fullWidth, error && styles.error)}>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          value={value}
          className={clsx(
            styles.input,
            styles[variant],
            (isFocused || hasValue) && styles.hasValue,
          )}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />

        {label && (
          <label
            className={clsx(styles.label, (isFocused || hasValue) && styles.labelShrink)}
            onClick={() => inputRef.current?.focus()}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
};
