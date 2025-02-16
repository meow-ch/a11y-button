import { AccessibilitySettings, TextScaleFactor } from '../types';
interface QuickControlsProps {
    blackAndWhite: AccessibilitySettings["blackAndWhite"];
    textScaleFactor: TextScaleFactor;
    showReadingMask: AccessibilitySettings["showReadingMask"];
    onSettingsChange: (settings: Partial<AccessibilitySettings>) => void;
    disabled: boolean;
}
export declare function QuickControls({ blackAndWhite, textScaleFactor, showReadingMask, onSettingsChange, disabled }: QuickControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
