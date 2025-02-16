import { ReactNode, ButtonHTMLAttributes } from 'react';
type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    scale?: number;
    active?: boolean;
} & ({
    text?: string;
    icon: ReactNode;
} | {
    text: string;
    icon?: ReactNode;
});
export declare function IconButton({ icon, label, variant, scale, active, disabled, text, className, ...props }: IconButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
