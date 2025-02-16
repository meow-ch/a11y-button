interface CheckboxControlProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    fontSize: number;
}
export declare function CheckboxControl({ label, checked, onChange, fontSize }: CheckboxControlProps): import("react/jsx-runtime").JSX.Element;
export {};
