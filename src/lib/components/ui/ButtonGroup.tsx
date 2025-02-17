import { ReactNode } from 'react';
import styles from './ButtonGroup.module.css';

interface ButtonGroupProps {
  children: ReactNode;
  gapScale?: number;
}

export function ButtonGroup({ children }: ButtonGroupProps) {
  return (
    <div className={styles['a11y-button-group']}>
      {children}
    </div>
  );
}
