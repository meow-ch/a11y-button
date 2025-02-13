import { ReactNode, useState, useEffect } from 'react';
import { XIcon, Save, RotateCcw, Settings2 } from 'lucide-react';
import { createPortal } from 'react-dom';
import { AccessibilityPanel } from './AccessibilityPanel';
import { ReadingMask } from './ReadingMask';
import { QuickControls } from './QuickControls';
import { useAccessibilityStyles } from '../hooks/useAccessibilityStyles';
import { getContrastRatio } from '../utils/color';
import { Toggle } from './Toggle';
import { useAccessibility } from '../context/AccessibilityContext';
import { ProfileSelector } from './ProfileSelector';
import { Button } from './ui/Button';
import { IconButton } from './ui/IconButton';
import { AccessibilityButton } from './AccessibilityButton';
import { AccessibilitySettings } from '../types';
import { languageNames } from '../i18n/translations';
import { Language } from '../types';

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
    t
  } = useAccessibility();

  useAccessibilityStyles(settings);

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

  const handleSettingsUpdate = async (newSettings: Partial<AccessibilitySettings>) => {
    if (newSettings.backgroundColor || newSettings.foregroundColor) {
      const bgColor = newSettings.backgroundColor || settings.backgroundColor;
      const fgColor = newSettings.foregroundColor || settings.foregroundColor;
      const contrast = getContrastRatio(bgColor, fgColor);

      if (contrast < 4.5) {
        const proceed = window.confirm(
          t('Warning: The selected colors have low contrast (ratio: {{ratio}}:1).', { ratio: contrast.toFixed(2) })
          + t(' WCAG guidelines recommend a minimum of 4.5:1.\n\n')
          + t('Do you want to proceed with these colors anyway?')
        );
        if (!proceed) return;
      }
    }

    updateSettings(newSettings);
  };

  const toolbarContent = isOpen && portalContainer ? (
    <div
      style={{
        backgroundColor: settings.backgroundColor,
        color: settings.foregroundColor,
        fontSize: `${settings.fontSize}px`,
        maxWidth: '100vw',
        overflowX: 'hidden',
        borderBottom: '1px solid',
        borderColor: settings.foregroundColor,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 999999
      }}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: `${settings.fontSize}px`,
        padding: `${settings.fontSize * 0.75}px`,
        maxWidth: '100%'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: `${settings.fontSize}px`,
          flex: '1 1 auto',
          minWidth: '200px',
          maxWidth: '100%'
        }}>
          <h2 style={{
            fontSize: `${settings.fontSize * 1.25}px`,
            fontWeight: 600,
            whiteSpace: 'nowrap'
          }}>
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
                onSettingsChange={handleSettingsUpdate}
                disabled={showAdvanced}
              />
            </>
          )}
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: `${settings.fontSize * 0.75}px`,
          margin: `${settings.fontSize * 0.25}px 0`
        }}>
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
            onChange={(e) => handleSettingsUpdate({ language: e.target.value as Language })}
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
        <div style={{
          padding: `${settings.fontSize}px`,
          maxWidth: '100%',
          overflowX: 'hidden'
        }}>
          <AccessibilityPanel
            settings={settings}
            updateSettings={handleSettingsUpdate}
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
