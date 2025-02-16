import { ReactNode } from 'react';
export interface AccessibilityToolbarProps {
    position?: 'fixed' | 'absolute';
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    borderRadius?: string;
    iconHandle?: 'settings' | 'eye' | 'palette' | 'type' | 'layout';
    children?: ReactNode;
    hideButtonWhenOpen?: boolean;
}
export declare function AccessibilityToolbar(props: AccessibilityToolbarProps): import("react/jsx-runtime").JSX.Element;
