import React from 'react';
import { AccessibilityToolbar } from '../lib';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Default sticky toolbar */}
      <AccessibilityToolbar bottom={'5rem'} />

      {/* Example content */}
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Accessibility Toolbar Demo</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Text Examples</h2>
          <p className="mb-4">
            This text will adapt to your accessibility preferences. Try adjusting the font size,
            spacing, or enabling the reading mask to see how it affects the content.
          </p>
          <p className="mb-4">
            Visit our <a href="#" className="text-blue-500 hover:underline">documentation</a> or
            check out our <a href="#" className="text-blue-500 hover:underline">resources</a>.
          </p>
        </section>

        <section className="mb-12 relative">
          <h2 className="text-2xl font-semibold mb-4">Multiple Toolbars Example</h2>
          <div className="p-8 border rounded relative">
            <p className="mb-4">
              This section has its own toolbar with different settings:
            </p>
            {/* Additional toolbar with custom position and icon */}
            <AccessibilityToolbar
              position="fixed"
              bottom="1rem"
              right="1rem"
              iconHandle="palette"
              borderRadius="4px"
              hideButtonWhenOpen={true}
            />
            <p>
              Content in this section can have different accessibility settings
              than the main content. The button hides when the toolbar is open.
            </p>
          </div>
        </section>

        {/* Custom trigger example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Custom Trigger Example</h2>
          <AccessibilityToolbar>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Customize Accessibility
            </button>
          </AccessibilityToolbar>
        </section>
      </main>
    </div>
  );
}
