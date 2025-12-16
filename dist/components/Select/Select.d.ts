import React from 'react';
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
export declare const Select: ({ label, options, fullWidth, variant, value, placeholder, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Select.d.ts.map