import { AccessibilityProfile, AccessibilitySettings } from '../types';
interface ProfileSelectorProps {
    currentProfile: AccessibilityProfile;
    onChange: (profile: AccessibilityProfile, settings: Partial<AccessibilitySettings>) => void;
    disabled?: boolean;
    textScaleFactor: number;
}
export declare function ProfileSelector({ currentProfile, onChange, disabled, textScaleFactor }: ProfileSelectorProps): import("react/jsx-runtime").JSX.Element;
export {};
