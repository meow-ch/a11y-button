import { AccessibilitySettings } from '../../types';
interface TextControlsProps {
    settings: AccessibilitySettings;
    onUpdate: (settings: Partial<AccessibilitySettings>) => void;
}
export declare function TextControls({ settings, onUpdate }: TextControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
