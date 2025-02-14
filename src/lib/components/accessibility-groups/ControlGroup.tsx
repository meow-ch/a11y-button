import { ReactNode } from 'react';
import styles from './ControlGroup.module.css';

interface ControlGroupProps {
  title: string;
  children: ReactNode;
  fontSize: number;
}

export function ControlGroup({ title, children, fontSize }: ControlGroupProps) {
  const groupVars = {
    '--a11y-group-gap': `${fontSize * 0.5}px`,
    '--a11y-title-font-size': `${fontSize * 1.25}px`,
    '--a11y-title-padding': `${fontSize * 0.5}px`,
    '--a11y-content-gap': `${fontSize * 0.75}px`,
  } as React.CSSProperties;

  return (
    <div className={styles['a11y-button-control-group']} style={groupVars}>
      <h3 className={styles['a11y-button-control-group-title']}>
        {title}
      </h3>
      <div className={styles['a11y-button-control-group-content']}>
        {children}
      </div>
    </div>
  );
}
