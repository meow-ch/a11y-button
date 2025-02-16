import { ReactNode } from 'react';
interface AccessibilityButtonProps {
    isOpen: boolean;
    onClick: () => void;
    textScaleFactor: number;
    position?: 'fixed' | 'absolute';
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    borderRadius?: string;
    iconHandle?: 'settings' | 'eye' | 'palette' | 'type' | 'layout' | 'accessibility';
    children?: ReactNode;
    hideWhenOpen?: boolean;
}
export declare function AccessibilityButton({ isOpen, onClick, textScaleFactor, position, top, right, bottom, left, borderRadius, iconHandle, children, hideWhenOpen }: AccessibilityButtonProps): import("react/jsx-runtime").JSX.Element | null;
export {};
