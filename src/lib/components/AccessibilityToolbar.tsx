import { ReactNode, useState, useEffect } from 'react';
import { XIcon, Save, RotateCcw, Settings2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import { AccessibilityPanel } from './AccessibilityPanel';
import { ReadingMask } from './ReadingMask';
import { QuickControls } from './QuickControls';
import { useAccessibilityStyles } from '../hooks/useAccessibilityStyles';
import { Toggle } from './Toggle';
import { useAccessibility } from '../context/AccessibilityContext';
import { ProfileSelector } from './ProfileSelector';
import { Button } from './ui/Button';
import { IconButton } from './ui/IconButton';
import { AccessibilityButton } from './AccessibilityButton';
import { languageNames } from '../i18n/translations';
import { Language } from '../types';
import styles from './AccessibilityToolbar.module.css';

export interface AccessibilityToolbarProps {
  position?: 'fixed' | 'absolute';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  borderRadius?: string;
  iconHandle?: 'settings' | 'eye' | 'palette' | 'type' | 'layout';
  children?: ReactNode;
  hideButtonWhenOpen?: boolean;
}

function ToolbarContent({
  props,
  portalContainer
}: {
  props: AccessibilityToolbarProps;
  portalContainer: HTMLDivElement | null;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const {
    visibleSettings: settings,
    language,
    isEnabled,
    hasChanges,
    updateSettings,
    setEnabled,
    resetSettings,
    setProfile,
    commitChanges,
    rollbackChanges,
    t,
    fontOptions
  } = useAccessibility();

  useAccessibilityStyles(settings, fontOptions[0], isEnabled);

  const handleClose = () => {
    if (hasChanges) {
      const shouldSave = window.confirm(
        t('You have unsaved changes. Would you like to save them before closing?')
      );
      if (shouldSave) {
        commitChanges();
      } else {
        rollbackChanges();
      }
    }
    setIsOpen(false);
  };

  const handleSave = () => {
    commitChanges();
    setIsOpen(false);
  };

  const toolbarVars = {
    '--a11y-toolbar-gap': `${settings.fontSize}px`,
    '--a11y-toolbar-padding': `${settings.fontSize * 0.75}px`,
    '--a11y-toolbar-title-size': `${settings.fontSize * 1.25}px`,
    '--a11y-toolbar-controls-gap': `${settings.fontSize * 0.75}px`,
    '--a11y-toolbar-controls-margin': `${settings.fontSize * 0.25}px 0`,
    '--a11y-toolbar-advanced-padding': `${settings.fontSize}px`,
  } as React.CSSProperties;

  const toolbarContent = isOpen && portalContainer ? (
    <div className={styles['a11y-button-toolbar']} style={toolbarVars}>
      <div className={styles['a11y-button-toolbar-header']}>
        <div className={styles['a11y-button-toolbar-main']}>
          <h2 className={styles['a11y-button-toolbar-title']}>
            {t('Accessibility')}
          </h2>
          <Toggle
            checked={isEnabled}
            onChange={setEnabled}
            size={settings.fontSize * 1.5}
          />
          {isEnabled && (
            <>
              <ProfileSelector
                currentProfile={settings.currentProfile}
                onChange={setProfile}
                disabled={false}
                fontSize={settings.fontSize}
              />
              <QuickControls
                settings={settings}
                onSettingsChange={updateSettings}
                disabled={showAdvanced}
              />
            </>
          )}
        </div>

        <div className={styles['a11y-button-toolbar-controls']}>
          {isEnabled && hasChanges && (
            <>
              <Button
                variant="primary"
                icon={<Save size={settings.fontSize} />}
                onClick={handleSave}
                fontSize={settings.fontSize}
              >
                {t('Save Changes')}
              </Button>
              <Button
                variant="ghost"
                icon={<RotateCcw size={settings.fontSize} />}
                onClick={rollbackChanges}
                fontSize={settings.fontSize}
              >
                {t('Revert')}
              </Button>
            </>
          )}
          {isEnabled && (
            <Button
              variant="secondary"
              icon={<Settings2 size={settings.fontSize} />}
              onClick={() => setShowAdvanced(!showAdvanced)}
              fontSize={settings.fontSize}
            >
              {showAdvanced ? t('Less Options') : t('More Options')}
            </Button>
          )}
          <select
            value={language}
            onChange={(e) => updateSettings({ language: e.target.value as Language })}
            style={{
              padding: `${settings.fontSize * 0.25}px ${settings.fontSize * 0.5}px`,
              fontSize: `${settings.fontSize}px`,
              height: `${settings.fontSize * 2}px`,
              borderRadius: '4px',
              border: '2px solid currentColor'
            }}
            aria-label={t('language')}
          >
            {Object.entries(languageNames).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          <IconButton
            icon={<XIcon size={settings.fontSize} />}
            label="Close"
            onClick={handleClose}
            variant="danger"
            size={settings.fontSize * 1.2}
          />
        </div>
      </div>

      {showAdvanced && isEnabled && (
        <div className={styles['a11y-button-toolbar-advanced']}>
          <AccessibilityPanel
            settings={settings}
            updateSettings={updateSettings}
            resetSettings={resetSettings}
          />
        </div>
      )}
    </div>
  ) : null;

  return (
    <>
      {props.children ? (
        <div onClick={() => setIsOpen(!isOpen)}>
          {props.children}
        </div>
      ) : (
        <AccessibilityButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          fontSize={settings.fontSize}
          position={props.position}
          top={props.top}
          right={props.right}
          bottom={props.bottom}
          left={props.left}
          borderRadius={props.borderRadius}
          iconHandle={props.iconHandle}
          hideWhenOpen={props.hideButtonWhenOpen}
        />
      )}

      {portalContainer && createPortal(toolbarContent, portalContainer)}
      {portalContainer && createPortal(
        <ReadingMask isEnabled={isEnabled && settings.showReadingMask} />,
        portalContainer
      )}
    </>
  );
}

export function AccessibilityToolbar(props: AccessibilityToolbarProps) {
  const [portalContainer, setPortalContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = document.createElement('div');
    container.id = 'accessibility-toolbar-root';
    container.style.position = 'static';
    container.style.width = '100%';

    if (document.body.firstChild) {
      document.body.insertBefore(container, document.body.firstChild);
    } else {
      document.body.appendChild(container);
    }

    setPortalContainer(container);

    return () => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return <ToolbarContent props={props} portalContainer={portalContainer} />;
}
