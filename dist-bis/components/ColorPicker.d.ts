interface ColorPickerProps {
    label: string;
    value: string;
    onChange: (color: string) => void;
    fontSize: number;
}
export declare function ColorPicker({ label, value, onChange, fontSize }: ColorPickerProps): import("react/jsx-runtime").JSX.Element;
export {};
