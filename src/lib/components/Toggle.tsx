import { useAccessibility } from '../context/AccessibilityContext';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: number;
}

export function Toggle({ checked, onChange, size = 24 }: ToggleProps) {
  const { visibleSettings } = useAccessibility();
  const { removeBackgrounds, blackAndWhite, backgroundColor, foregroundColor } = visibleSettings;

  const width = size * 2;
  const height = size;
  const knobSize = height - 4;

  const shouldShowBorder = removeBackgrounds || blackAndWhite;

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
        border: shouldShowBorder ? `2px solid ${foregroundColor}` : 'none',
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
          backgroundColor: backgroundColor,
          borderRadius: '50%',
          transition: 'left 0.3s',
          boxShadow: shouldShowBorder
            ? `0 0 0 2px ${foregroundColor}`
            : '0 2px 4px rgba(0,0,0,0.2)',
        }}
      />
    </button>
  );
}
