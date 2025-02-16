import { ReactNode, ButtonHTMLAttributes } from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    children?: ReactNode;
    fullWidth?: boolean;
    textScaleFactor?: number;
}
export declare function Button({ variant, size, icon, children, fullWidth, textScaleFactor, disabled, className, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
