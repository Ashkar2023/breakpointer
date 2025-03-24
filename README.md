# Breakpointer

A lightweight React library for real-time breakpoint detection with support for custom and default Tailwind breakpoints.

## Installation

```bash
npm install breakpointer
```

## Exports

| Export | Description |
|--------|-------------|
| `BreakpointerProvider` | A context provider to wrap your application |
| `useBreakpointer` | A hook to access the current breakpoint |
| `BreakpointerIndicator` | A component that displays the current screen width and an icon based on the breakpoint |

## Basic Usage

### Setup

Wrap your application with `BreakpointerProvider`:

```tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BreakpointerProvider } from 'breakpointer';
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

const config = resolveConfig(tailwindConfig);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BreakpointerProvider breakpointsObj={config.theme.screens}>
            <App />
        </BreakpointerProvider>
    </StrictMode>,
)
```

### Using the Hook

Use the `useBreakpointer` hook to detect breakpoints in your components:

```tsx
import React from 'react';
import { useBreakpointer } from 'breakpointer';

const MyComponent = () => {
    const {
        screen,      // ex: "md" if currentWidth is in the range from 768 - 1023
        currentWidth // innerWidth/viewPort width
    } = useBreakpointer();
    
    return (
        <div>
            {screen === 'sm' && <p>Small screen (640px - 767px)</p>}
            {screen === 'md' && <p>Medium screen (768px - 1023px)</p>}
            {screen === 'lg' && <p>Large screen (1024px - 1279px)</p>}
            <p>Current width: {currentWidth}px</p>
        </div>
    );
};

export default MyComponent;
```

## Default Breakpoints

Breakpointer comes with the following default breakpoints, which align with Tailwind CSS's default breakpoint system:

```tsx
const breakpoints = {
    sm: 640,  // large phones & small tablets (640px - 767px)
    md: 768,  // Tablets (768px - 1023px)
    lg: 1024, // Laptops & large tablets (1024px - 1279px)
    xl: 1280, // Desktop & large laptops (1280px - 1535px)
    "2xl": 1536 // Wide screen & large desktops (1536px and above)
} as const;
```

## Tailwind Configuration

**Note:** `resolveConfig` is only applicable for Tailwind CSS version `3.x.x`.

To use custom Tailwind breakpoints, pass a `breakpointsObj` prop to `BreakpointerProvider`:

```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BreakpointerProvider } from 'breakpointer';

import resolveConfig from "tailwindcss/resolveConfig"; // resolver Function
import tailwindConfig from "../tailwind.config"; // js/ts tailwind config 

const resolvedConfig = resolveConfig(tailwindConfig);

createRoot(document.getElementById('root')!).render(
    <BreakpointerProvider breakpointsObj={resolvedConfig.theme.screens}>
        <App />
    </BreakpointerProvider>,
    document.getElementById('root')
);
```

## BreakpointerIndicator

The `BreakpointerIndicator` component displays an icon on the screen along with the current viewport width. This is useful during development for visual feedback.

### Usage

```tsx
import { BreakpointerProvider, BreakpointerIndicator } from 'breakpointer';

const App = () => {
    return (
        <BreakpointerProvider>
            <YourApp />
            <BreakpointerIndicator /> {/* This component can be placed anywhere */}
        </BreakpointerProvider>
    );
};
```

This component will show an icon representing the current breakpoint and display the viewport width in pixels.

# Contributing

We welcome contributions to Breakpointer! Here are some guidelines to help you get started:

### Code of Conduct

Please be respectful and considerate of others when contributing to this project. We aim to foster an inclusive and welcoming community.

### How to Contribute

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature or bugfix
4. **Make your changes** and commit them with clear, descriptive messages
5. **Push your branch** to your fork
6. **Submit a pull request** to the main repository

### Development Setup

```bash
# Clone the repository
git clone https://github.com/Ashkar2023/breakpointer.git
cd breakpointer

# Install dependencies
npm install

# start tsup in watch mode
npm run dev
```

### Pull Request Guidelines

- Include a clear description of the changes
- Make sure your code follows the existing style
- Add or update tests as necessary
- Update documentation for any new features
- All tests must pass before the PR can be merged

### Coding Standards

- Use 4 spaces for indentation
- Follow TypeScript best practices
- Maintain compatibility with React 18+
- Keep bundle size minimal

### Reporting Issues

If you find a bug or have a feature request, please create an issue on the GitHub repository with:

- A clear title and description
- Steps to reproduce the issue
- Expected and actual behavior
- Screenshots if applicable
- Any relevant code snippets