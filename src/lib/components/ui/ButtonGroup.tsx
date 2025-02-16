import { ReactNode } from 'react';
import styles from './ButtonGroup.module.css';

interface ButtonGroupProps {
  children: ReactNode;
  gapScale?: number;
}

export function ButtonGroup({ children, gapScale = 0.5 }: ButtonGroupProps) {
  const groupVars = {
    '--a11y-button-group-gap': `calc(var(--a11y-button-base-font-size) * ${gapScale})`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-group']} style={groupVars}>
      {children}
    </div>
  );
}
