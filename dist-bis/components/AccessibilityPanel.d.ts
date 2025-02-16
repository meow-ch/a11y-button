import { AccessibilitySettings } from '../types';
interface AccessibilityPanelProps {
    settings: AccessibilitySettings;
    updateSettings: (settings: Partial<AccessibilitySettings>) => void;
    resetSettings: () => void;
}
export declare function AccessibilityPanel({ settings, updateSettings, resetSettings }: AccessibilityPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
