import { ReactNode, useState, useEffect, useCallback } from 'react';
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
import { LanguageSelect } from './LanguageSelect';
import React from 'react';
import { ACCESSIBILITY_TOOLBAR_DEFAULT_ID } from '../types';
import { NavigationAssistant } from './NavigationAssistant';

export interface AccessibilityToolbarProps {
  id?: string;
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

  const { id, position, top, right, bottom, left, borderRadius, iconHandle, children, hideButtonWhenOpen } = props;

  const {
    visibleSettings: settings,
    isEnabled,
    hasChanges,
    scaledFontSize,
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

  const handleAccessibilityButtonClick = useCallback(() => {
    if (!isOpen) {
      window.scrollTo(0, 0);
    }
    setIsOpen(!isOpen)
  }, [setIsOpen, isOpen]);

  const buttonWithMaybeHandler = React.isValidElement(children)
    ? children
    : <AccessibilityButton
        id={id}
        isOpen={isOpen}
        onClick={undefined as unknown as () => void}
        position={position}
        top={top}
        right={right}
        bottom={bottom}
        left={left}
        borderRadius={borderRadius}
        iconHandle={iconHandle}
      />;
  const child = buttonWithMaybeHandler as React.ReactElement<any>;
  const finalId = child.props.id || id || ACCESSIBILITY_TOOLBAR_DEFAULT_ID;
  const existingOnClick = child.props.onClick as React.MouseEventHandler<HTMLElement> | undefined;
  const enhancedButton = React.cloneElement(child, {
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      handleAccessibilityButtonClick();
      if (existingOnClick) {
        existingOnClick(e);
      }
    },
    id: finalId,
  });

  const toolbarContent = isOpen && portalContainer ? (
    <div id={finalId} tabIndex={-1} className={styles['a11y-button-toolbar']}>
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
              />
              <QuickControls
                blackAndWhiteImages={settings?.blackAndWhiteImages}
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
              size="sm"
              variant="secondary"
              icon={<Settings2 size={scaledFontSize * 1.2} />}
              onClick={() => setShowAdvanced(!showAdvanced)}
            >
              {showAdvanced ? t('Less Options') : t('More Options')}
            </Button>
          )}
          <LanguageSelect />
          <IconButton
            icon={<XIcon size={scaledFontSize * 1.2}/>}
            label="Close"
            onClick={handleClose}
            variant="danger"
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
                icon={<RotateCcw size={scaledFontSize * 1.2} />}
                onClick={handleReset}
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
                    icon={<RotateCcw size={scaledFontSize * 1.2} />}
                    onClick={rollbackChanges}
                  >
                    {t('Revert')}
                  </Button>
                  <Button
                    className={styles['a11y-button-toolbar-footer-button']}
                    variant="primary"
                    icon={<Save size={scaledFontSize * 1.2} />}
                    onClick={handleSave}
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
      {((!hideButtonWhenOpen || !isOpen) && (enhancedButton)) || null}
      {portalContainer && createPortal(toolbarContent, portalContainer)}
      {portalContainer && createPortal(
        <ReadingMask isEnabled={isEnabled && settings.showReadingMask} />,
        portalContainer
      )}
      {portalContainer && createPortal(
        <NavigationAssistant />,
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
