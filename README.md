# a11y-button

A highly customizable accessibility toolbar for React applications that helps users adjust visual and reading preferences.

## Features

- 🎨 High contrast interface
- 📏 Adjustable text size, spacing, and line height
- 🎯 Reading mask for better focus
- 🔤 Multiple font options including dyslexia-friendly fonts
- 🎯 Easy navigation mode with auto-click
- 💾 Save and restore preferences
- 📱 Fully responsive
- ⌨️ Keyboard accessible
- 🎯 WCAG compliant
- 🔌 Zero configuration required

## Installation

```bash
npm install a11y-button
```

## Quick Start

```jsx
import { AccessibilityToolbar } from 'a11y-button';
import { AccessibilityProvider } from 'a11y-button';

function App() {
  return (
    <AccessibilityProvider>
      <div>
        <AccessibilityToolbar />
        {/* Your app content */}
      </div>
    </AccessibilityProvider>
  );
}
```

## Usage Examples

### Basic Usage with Default Button

```jsx
// Simple implementation with default settings
<AccessibilityProvider>
  <AccessibilityToolbar />
</AccessibilityProvider>
```

### Custom Button Implementation

```jsx
import { AccessibilityToolbar } from 'a11y-button';

function App() {
  return (
    <AccessibilityToolbar
      hideButtonWhenOpen={true}
      id="accessibility-toolbar"
    >
      <button
        id="accessibility-toolbar"
        onClick={() => {
          // Optional: Focus the toolbar after opening
          setTimeout(() => {
            window.document.getElementById("accessibility-toolbar")?.focus();
          }, 300);
        }}
      >
        Customize Accessibility
      </button>
    </AccessibilityToolbar>
  );
}
```

### Custom Positioning

```jsx
// Fixed position in top-right corner
<AccessibilityToolbar
  position="fixed"
  top="1rem"
  right="1rem"
/>

// Absolute position in bottom-left
<AccessibilityToolbar
  position="absolute"
  bottom="1rem"
  left="1rem"
/>
```

### Custom Appearance

```jsx
// Square button with palette icon
<AccessibilityToolbar
  borderRadius="4px"
  iconHandle="palette"
/>
```

## Features Guide

### Easy Navigation Mode

When enabled, this feature adds two large navigation buttons at the bottom right of the screen for scrolling up and down. Additionally, it provides an auto-click functionality:

- Hover over any clickable element for 2 seconds to trigger a click
- Visual progress indicator shows when auto-click will occur
- Great for users with motor difficulties

### Reading Mask

A focused reading aid that:
- Dims the entire page except for the current reading area
- Follows mouse movement
- Helps users focus on specific content
- Adjustable mask size based on text size

### Text Customization

Comprehensive text adjustment options:
- Font size scaling
- Line height adjustment
- Letter spacing
- Word spacing
- Multiple font families including dyslexia-friendly options

### Visual Aids

Various visual enhancement features:
- High contrast mode
- Custom color schemes
- Black and white image conversion
- Link highlighting
- Layout simplification

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| position | 'fixed' \| 'absolute' | 'fixed' | Position of the trigger button |
| top | string | undefined | Top position |
| right | string | '1rem' | Right position |
| bottom | string | '1rem' | Bottom position |
| left | string | undefined | Left position |
| borderRadius | string | '50%' | Border radius of the trigger button |
| iconHandle | 'settings' \| 'eye' \| 'palette' \| 'type' \| 'layout' | 'settings' | Icon to display in the trigger button |
| children | ReactNode | undefined | Custom trigger element |
| hideButtonWhenOpen | boolean | false | Hide the trigger button when toolbar is open |
| id | string | undefined | ID for the toolbar (required when using custom button) |

## Persistence

User preferences are automatically saved to localStorage and restored on page reload.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

## License

MIT © 
