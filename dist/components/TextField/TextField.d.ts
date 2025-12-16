export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: boolean;
    fullWidth?: boolean;
    variant?: 'outlined' | 'filled' | 'standard';
}
export declare const TextField: ({ label, error, fullWidth, variant, value, ...props }: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextField.d.ts.map