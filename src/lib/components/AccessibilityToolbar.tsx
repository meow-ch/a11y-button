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
import styles from './AccessibilityToolbar.module.css';
import { getScaledFontSize } from '../utils/size';
import { LanguageSelect } from './LanguageSelect';
import { getOption } from '../utils/option';

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
    isEnabled,
    hasChanges,
    updateSettings,
    setEnabled,
    resetSettings,
    setProfile,
    commitChanges,
    rollbackChanges,
    t,
  } = useAccessibility();

  console.log("SETTINGS", settings)

  useAccessibilityStyles(settings, isEnabled);

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
    '--a11y-toolbar-gap': `calc(var(--a11y-button-base-font-size) * ${settings.fontSizeScaleOptionIndex})`,
    '--a11y-toolbar-padding': `calc(var(--a11y-button-base-font-size) * 0.75)`,
    '--a11y-toolbar-title-size': `calc(var(--a11y-button-base-font-size) * 1.25)`,
    '--a11y-toolbar-controls-gap': `calc(var(--a11y-button-base-font-size) * 0.75)`,
    '--a11y-toolbar-controls-margin': `calc(var(--a11y-button-base-font-size) * 0.25) 0`,
    '--a11y-toolbar-advanced-padding': `var(--a11y-button-base-font-size)`,
  } as React.CSSProperties;

  const textScaleFactor = getOption({ fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex });

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
            scale={1.5}
          />
          {isEnabled && (
            <>
              <ProfileSelector
                currentProfile={settings.currentProfile}
                onChange={setProfile}
                disabled={false}
                textScaleFactor={textScaleFactor}
              />
              <QuickControls
                blackAndWhite={settings?.blackAndWhite}
                textScaleFactor={textScaleFactor}
                showReadingMask={settings?.showReadingMask}
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
                icon={<Save size={getScaledFontSize(settings)} />}
                onClick={handleSave}
                textScaleFactor={textScaleFactor}
              >
                {t('Save Changes')}
              </Button>
              <Button
                variant="ghost"
                icon={<RotateCcw size={getScaledFontSize(settings)} />}
                onClick={rollbackChanges}
                textScaleFactor={textScaleFactor}
              >
                {t('Revert')}
              </Button>
            </>
          )}
          {isEnabled && (
            <Button
              variant="secondary"
              icon={<Settings2 size={getScaledFontSize(settings)} />}
              onClick={() => setShowAdvanced(!showAdvanced)}
              textScaleFactor={textScaleFactor}
            >
              {showAdvanced ? t('Less Options') : t('More Options')}
            </Button>
          )}
          <LanguageSelect aria-label={t('language')} />
          <IconButton
            icon={<XIcon size={getScaledFontSize(settings)} />}
            label="Close"
            onClick={handleClose}
            variant="danger"
            scale={settings.fontSizeScaleOptionIndex * 1.2}
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
          textScaleFactor={textScaleFactor}
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
