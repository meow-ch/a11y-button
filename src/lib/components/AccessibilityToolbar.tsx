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
import { getOption } from '../utils/option';
import { LanguageSelect } from './LanguageSelect';

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
    setShowAdvanced(false);
  };

  const handleSave = () => {
    commitChanges();
    setIsOpen(false);
  };

  const handleReset = () => {
    if (window.confirm(t('Are you sure you want to reset all settings to their defaults? You will need to save the changes to make them permanent.'))) {
      resetSettings();
    }
  };

  const textScaleFactor = getOption({ fontSizeScaleOptionIndex: settings.fontSizeScaleOptionIndex });

  const toolbarContent = isOpen && portalContainer ? (
    <div className={styles['a11y-button-toolbar']}>
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
          {isEnabled && (
            <Button
              variant="secondary"
              icon={<Settings2 />}
              onClick={() => setShowAdvanced(!showAdvanced)}
              textScaleFactor={textScaleFactor}
            >
              {showAdvanced ? t('Less Options') : t('More Options')}
            </Button>
          )}
          <LanguageSelect />
          <IconButton
            icon={<XIcon />}
            label="Close"
            onClick={handleClose}
            variant="danger"
            scale={textScaleFactor}
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
          <div className={styles['a11y-button-toolbar-footer']}>
            <div className={styles['a11y-button-toolbar-footer-group']}>
              <Button
                className={styles['a11y-button-toolbar-footer-button']}
                variant="danger"
                icon={<RotateCcw />}
                onClick={handleReset}
                textScaleFactor={textScaleFactor}
              >
                {t('Reset All Settings')}
              </Button>
            </div>
            <div className={styles['a11y-button-toolbar-footer-group']}>
              {hasChanges && (
                <>
                  <Button
                    className={styles['a11y-button-toolbar-footer-button']}
                    variant="ghost"
                    icon={<RotateCcw />}
                    onClick={rollbackChanges}
                    textScaleFactor={textScaleFactor}
                  >
                    {t('Revert')}
                  </Button>
                  <Button
                    className={styles['a11y-button-toolbar-footer-button']}
                    variant="primary"
                    icon={<Save />}
                    onClick={handleSave}
                    textScaleFactor={textScaleFactor}
                  >
                    {t('Save Changes')}
                  </Button>
                </>
              )}
            </div>
          </div>
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
