# Bun UI Library

Bun UI is a modern, lightweight, and customizable React component library designed to help developers build stunning and accessible user interfaces effortlessly. It provides a collection of reusable, responsive, and fully typed components that integrate seamlessly into your projects.

## Features

- **Lightweight**: Optimized for performance with minimal overhead.
- **Customizable**: Easily adaptable to your design system.
- **Responsive**: Designed with mobile-first principles.
- **Accessible**: Built with accessibility in mind to ensure inclusivity.
- **TypeScript Support**: Fully typed for a better developer experience.
- **Extensive Components**: Includes a variety of pre-built, reusable components.

## Installation

To get started, install the package via your preferred package manager:

```bash
# Using npm
npm install @bun-ui/react

# Using pnpm
pnpm add @bun-ui/react
```

## Usage

To use Bun UI, include the CSS file in your project:

### With Tailwind CSS

```css
/* app/globals.css */

/* Detect the @bun-ui/react components */
@source "../node_modules/@bun-ui/react/src/components/";

```

### Without Tailwind CSS

```tsx
// app/layout.tsx

import "@bun-ui/react/index.css"

function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

### Using Components

Here’s an example of how to use a component from Bun UI:

```tsx
import { Button } from "@bun-ui/react"

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  )
}

export default App
```

## Documentation

For detailed documentation and examples, visit the [Bun UI Documentation](https://your-docs-url.com).

## Contributing

We welcome contributions! Please check out our [Contributing Guide](https://your-contributing-guide-url.com) for more details.

## License

Bun UI is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
