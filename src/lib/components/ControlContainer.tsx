import { ReactNode } from 'react';

interface ControlContainerProps {
  label: string;
  labelStyle: React.CSSProperties;
  fontSize: number;
  children: ReactNode;
}

export function ControlContainer({ label, labelStyle, fontSize, children }: ControlContainerProps) {
  return (
    <div style={{
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'center',
      gap: `${fontSize * 0.75}px`,
      minHeight: `${fontSize * 2}px`,
    }}>
      <label style={{
        ...labelStyle,
        flex: '1',
        minWidth: `${fontSize * 7}px`,
        marginRight: 'auto'
      }}>
        {label}
      </label>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: '1',
        minWidth: `${fontSize * 7}px`,
      }}>
        {children}
      </div>
    </div>
  );
}
