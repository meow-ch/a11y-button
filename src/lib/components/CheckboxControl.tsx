interface CheckboxControlProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  fontSize: number;
}

export function CheckboxControl({ label, checked, onChange, fontSize }: CheckboxControlProps) {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: `${fontSize}px`,
    minWidth: 'fit-content',
    padding: `${fontSize * 0.25}px`,
    minHeight: `${fontSize * 3}px`
  };

  const labelStyle: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    fontWeight: 500,
    minWidth: `${fontSize * 7}px`,
    whiteSpace: 'nowrap'
  };

  const checkboxStyle: React.CSSProperties = {
    width: `${fontSize * 1.5}px`,
    height: `${fontSize * 1.5}px`,
    minWidth: `${fontSize * 1.5}px`,
    minHeight: `${fontSize * 1.5}px`,
    flexShrink: 0
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={checkboxStyle}
      />
    </div>
  );
}
