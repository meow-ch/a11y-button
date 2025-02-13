interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  fontSize: number;
}

export function ColorPicker({ label, value, onChange, fontSize }: ColorPickerProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: `${fontSize}px`,
    }}>
      <label style={{
        fontSize: `${fontSize}px`,
        fontWeight: 600,
        minWidth: `${fontSize * 7}px`,
      }}>
        {label}
      </label>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: `${fontSize * 2}px`,
          height: `${fontSize * 2}px`,
          padding: '2px',
          border: '2px solid #000000',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
