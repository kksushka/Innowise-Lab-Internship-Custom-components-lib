import { useRef, useState } from 'react';

export const useTextField = (value?: string) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasValue = Boolean(value && value !== '');

  return {
    inputRef,
    isFocused,
    hasValue,
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  };
};
