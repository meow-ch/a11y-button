import { ReactNode } from 'react';
import styles from './ControlContainer.module.css';

interface ControlContainerProps {
  label: string;
  labelStyle: React.CSSProperties;
  fontSize: number;
  children: ReactNode;
}

export function ControlContainer({ 
  label, 
  labelStyle, 
  fontSize, 
  children 
}: ControlContainerProps) {
  const containerVars = {
    '--a11y-container-gap': `${fontSize * 0.75}px`,
    '--a11y-container-min-height': `${fontSize * 2}px`,
    '--a11y-label-min-width': `${fontSize * 7}px`,
    '--a11y-content-min-width': `${fontSize * 7}px`,
    '--a11y-label-font-size': labelStyle.fontSize,
  } as React.CSSProperties;

  return (
    <div 
      className={styles['a11y-button-control-container']} 
      style={containerVars}
    >
      <label className={styles['a11y-button-control-label']}>
        {label}
      </label>
      <div className={styles['a11y-button-control-content']}>
        {children}
      </div>
    </div>
  );
}
