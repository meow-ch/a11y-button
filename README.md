# a11y-button

A highly customizable accessibility toolbar for React applications that helps users adjust visual and reading preferences.

## Features

- 🎨 High contrast interface
- 📏 Adjustable text size, spacing, and line height
- 🎯 Reading mask for better focus
- 🔤 Multiple font options including dyslexia-friendly fonts
- 💾 Save and restore preferences
- 📱 Fully responsive
- ⌨️ Keyboard accessible
- 🎯 WCAG compliant
- 🔌 Zero configuration required
- 🎯 Multiple independent instances support

## Installation

```bash
npm install a11y-button
```

## Quick Start

```jsx
import { AccessibilityToolbar } from 'a11y-button';

function App() {
  return (
    <div>
      <AccessibilityToolbar />
      {/* Your app content */}
    </div>
  );
}
```

## Usage Examples

### Basic Usage

```jsx
// Simple implementation with default settings
<AccessibilityToolbar />
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

// Custom trigger button
<AccessibilityToolbar>
  <button className="my-custom-button">
    Customize Accessibility
  </button>
</AccessibilityToolbar>
```

### Multiple Independent Toolbars

```jsx
function App() {
  return (
    <div>
      {/* Main toolbar */}
      <AccessibilityToolbar />
      
      {/* Separate section with its own toolbar */}
      <section className="special-content">
        <AccessibilityToolbar 
          position="absolute"
          top="1rem"
          right="1rem"
          iconHandle="palette"
        />
        <p>This content can have different accessibility settings.</p>
      </section>
    </div>
  );
}
```

### Framework-Specific Examples

#### Next.js

```jsx
'use client';

import { AccessibilityToolbar } from 'a11y-button';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AccessibilityToolbar />
        {children}
      </body>
    </html>
  );
}
```

#### Vite

```jsx
import { AccessibilityToolbar } from 'a11y-button';

function App() {
  return (
    <>
      <AccessibilityToolbar />
      <main>
        {/* Your app content */}
      </main>
    </>
  );
}
```

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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines for details.

## License

MIT © [Your Name]
