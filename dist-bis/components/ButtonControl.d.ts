import { ReactNode } from 'react';
interface ButtonControlProps {
    label: string;
    value: number;
    onChange: (value: number) => void;
    onCustomClick?: (direction: 'increase' | 'decrease') => void;
    min: number;
    max: number;
    multiplier?: number;
    disabled?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    labelStyle?: React.CSSProperties;
    isCustomRange?: boolean;
    isAtMin?: boolean;
    isAtMax?: boolean;
}
export declare function ButtonControl({ label, value, onChange, onCustomClick, min, max, multiplier, disabled, leftIcon, rightIcon, labelStyle, isCustomRange, isAtMin, isAtMax }: ButtonControlProps): import("react/jsx-runtime").JSX.Element;
export {};
