import { AccessibilitySettings } from '../../types';
interface VisualControlsProps {
    settings: AccessibilitySettings;
    onUpdate: (settings: Partial<AccessibilitySettings>) => void;
}
export declare function VisualControls({ settings, onUpdate }: VisualControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
