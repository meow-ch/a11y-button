import { ReactNode } from 'react';

interface ControlGroupProps {
  title: string;
  children: ReactNode;
  fontSize: number;
}

export function ControlGroup({ title, children, fontSize }: ControlGroupProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: `${fontSize * 0.5}px`,
      width: '100%',
      minWidth: '250px',
      maxWidth: '100%'
    }}>
      <h3 style={{ 
        fontSize: `${fontSize * 1.25}px`,
        fontWeight: 600,
        borderBottom: '1px solid currentColor',
        paddingBottom: `${fontSize * 0.5}px`
      }}>
        {title}
      </h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: `${fontSize * 0.75}px`,
        width: '100%'
      }}>
        {children}
      </div>
    </div>
  );
}
