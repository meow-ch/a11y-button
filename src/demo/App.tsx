import React from 'react';
import { AccessibilityToolbar } from '../lib';
import { AccessibilityProvider } from '../lib/context/AccessibilityContext';

export function App() {
  return (
    <AccessibilityProvider defaultLanguage='fr'>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-gray-900">TechDocs</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Tutorials</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">API Reference</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Sign In</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </nav>
        </header>

        <AccessibilityToolbar hideButtonWhenOpen id="hello" languages={['de']}/>

        <div className="container mx-auto px-4 py-8 flex">
          <aside className="hidden lg:block w-64 pr-8">
            <nav className="space-y-1">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Getting Started
              </h3>
              <a href="#" className="block px-3 py-2 text-blue-600 bg-blue-50 rounded-md">Introduction</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Quick Start</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Installation</a>
              
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2">
                Core Concepts
              </h3>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Architecture</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Components</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">Data Flow</a>
            </nav>
          </aside>

          <main className="flex-1 max-w-4xl">
            <article className="prose lg:prose-lg">
              <h1>Getting Started with Our Platform</h1>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
                <p className="text-blue-700">
                  This guide will help you understand the core concepts of our platform and get you up and running quickly.
                </p>
              </div>

              <h2>Overview</h2>
              <p>
                Our platform provides a comprehensive solution for building modern web applications. 
                With our tools and libraries, you can create robust, scalable applications that deliver 
                exceptional user experiences.
              </p>

              <h3>Key Features</h3>
              <ul>
                <li>Component-based architecture for better code organization</li>
                <li>Built-in performance optimizations</li>
                <li>Extensive plugin ecosystem</li>
                <li>Comprehensive documentation and community support</li>
              </ul>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Example Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop" 
                    alt="Coding on a laptop"
                    className="rounded-lg shadow-md"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop" 
                    alt="Developer workspace"
                    className="rounded-lg shadow-md"
                  />
                </div>
              </section>

              <h2>Prerequisites</h2>
              <p>
                Before you begin, ensure you have the following installed on your system:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm">
                  <code>
                    node -v # v14.0.0 or higher{'\n'}
                    npm -v  # v6.0.0 or higher
                  </code>
                </pre>
              </div>

              <h2>Installation</h2>
              <p>
                You can install our platform using npm:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm">
                  <code>
                    npm install @platform/core{'\n'}
                    npm install @platform/cli
                  </code>
                </pre>
              </div>

              <h2>Basic Usage</h2>
              <p>
                Here's a simple example of how to use our platform:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-6">
                <pre className="text-sm">
                  <code>
                    {`import { Platform } from '@platform/core'

const app = new Platform({
  name: 'MyApp',
  version: '1.0.0'
})

app.start()`}
                  </code>
                </pre>
              </div>

              <h2>Advanced Configuration</h2>
              <p>
                Our platform can be customized to meet your specific needs through configuration options:
              </p>

              <table className="min-w-full border border-gray-200 my-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Option
                    </th>
                    <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Default
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      debug
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      boolean
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      false
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      timeout
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      number
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5000
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>Best Practices</h2>
              <p>
                When working with our platform, consider the following best practices:
              </p>

              <ul>
                <li>Always handle errors appropriately</li>
                <li>Use TypeScript for better type safety</li>
                <li>Follow our coding conventions</li>
                <li>Write comprehensive tests</li>
              </ul>

              <h2>Troubleshooting</h2>
              <p>
                If you encounter any issues, try the following steps:
              </p>

              <ol>
                <li>Check the console for error messages</li>
                <li>Verify your configuration</li>
                <li>Update to the latest version</li>
                <li>Search our documentation</li>
              </ol>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <p className="text-yellow-700">
                  <strong>Note:</strong> Make sure to check our GitHub repository for known issues and solutions.
                </p>
              </div>

              <h2>Community and Support</h2>
              <p>
                Join our community to get help and share your experiences:
              </p>

              <ul>
                <li>GitHub Discussions</li>
                <li>Discord Channel</li>
                <li>Stack Overflow</li>
                <li>Twitter Community</li>
              </ul>

              <h2>Contributing</h2>
              <p>
                We welcome contributions from the community. Please read our contribution guidelines 
                before submitting pull requests.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
                <p className="text-green-700">
                  Ready to contribute? Check out our good first issues on GitHub!
                </p>
              </div>
            </article>
          </main>
        </div>
      </div>
    </AccessibilityProvider>
  );
}
