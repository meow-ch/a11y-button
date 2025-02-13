interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
}

export function Toggle({ checked, onChange, size = 24 }: ToggleProps) {
  const width = size * 2;
  const height = size;
  const knobSize = height - 4;

  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: checked ? '#4CAF50' : '#ccc',
        borderRadius: `${height}px`,
        padding: '2px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        display: 'inline-flex',
        alignItems: 'center'
      }}
    >
      <span
        style={{
          position: 'absolute',
          left: checked ? `${width - knobSize - 2}px` : '2px',
          width: `${knobSize}px`,
          height: `${knobSize}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          transition: 'left 0.3s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
      />
    </button>
  );
}
