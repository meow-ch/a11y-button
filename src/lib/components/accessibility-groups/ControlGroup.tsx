import { ReactNode } from 'react';
import styles from './ControlGroup.module.css';

interface ControlGroupProps {
  title: string;
  children: ReactNode;
  textScaleFactor: number;
}

export function ControlGroup({ title, children, textScaleFactor }: ControlGroupProps) {
  const groupVars = {
    '--a11y-group-gap': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5})`,
    '--a11y-title-font-size': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 1.25})`,
    '--a11y-title-padding': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.5})`,
    '--a11y-content-gap': `calc(var(--a11y-button-base-font-size) * ${textScaleFactor * 0.75})`,
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
