import { ReactNode } from 'react';
import styles from './ControlGroup.module.css';

interface ControlGroupProps {
  title: string;
  children: ReactNode;
}

export function ControlGroup({ title, children }: ControlGroupProps) {
  return (
    <div className={styles['a11y-button-control-group']}>
      <h3 className={styles['a11y-button-control-group-title']}>
        {title}
      </h3>
      <div className={styles['a11y-button-control-group-content']}>
        {children}
      </div>
    </div>
  );
}
