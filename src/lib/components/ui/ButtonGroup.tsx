import { ReactNode } from 'react';
import styles from './ButtonGroup.module.css';

interface ButtonGroupProps {
  children: ReactNode;
  gap?: number;
}

export function ButtonGroup({ children, gap = 8 }: ButtonGroupProps) {
  const groupVars = {
    '--a11y-button-group-gap': `${gap}px`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-group']} style={groupVars}>
      {children}
    </div>
  );
}
