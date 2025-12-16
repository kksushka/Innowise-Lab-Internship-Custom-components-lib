import React from 'react';
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export declare const Switch: ({ checked, onChange, disabled, ...props }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Switch.d.ts.map