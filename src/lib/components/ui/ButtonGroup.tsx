import { ReactNode } from 'react';

interface ButtonGroupProps {
  children: ReactNode;
  gap?: number;
}

export function ButtonGroup({ children, gap = 8 }: ButtonGroupProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: `${gap}px`,
    }}>
      {children}
    </div>
  );
}
