import { ReactNode } from 'react';
interface ControlContainerProps {
    label: string;
    labelStyle: React.CSSProperties;
    fontSize: number;
    children: ReactNode;
}
export declare function ControlContainer({ label, labelStyle, fontSize, children }: ControlContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
