> [!CAUTION]
> This library is heavily under development. Expect bugs, breaking changes, and incomplete features as we work towards a stable release. Use at your own risk and feel free to contribute!

# Bun UI

Bun UI is a modern, lightweight, and customizable React component library designed to help developers build stunning and accessible user interfaces effortlessly. This monorepo contains the core library and a documentation site built with Next.js.

## Packages

This repository is organized as a monorepo using [pnpm workspaces](https://pnpm.io/workspaces). It includes the following packages:

### [@bun-ui/react](packages/react)

The core React component library. It provides reusable, responsive, and fully typed components that integrate seamlessly into your projects.

- **Features**:
  - Lightweight and optimized for performance.
  - Fully customizable to fit your design system.
  - Built with accessibility in mind.
  - Includes extensive pre-built components.
  - TypeScript support for a better developer experience.

### [apps/www](apps/www)

A Next.js application that serves as the documentation site for Bun UI. It showcases the components and provides usage examples.

- **Features**:
  - Interactive component demos.
  - Comprehensive documentation.
  - Built with Tailwind CSS for styling.

## Installation

To get started with Bun UI, install the core library via your preferred package manager:

```bash
# Using npm
npm install @bun-ui/react

# Using pnpm
pnpm add @bun-ui/react
```

## Development

To set up the development environment, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/khanguyen74/bun-ui.git
   cd bun-ui
   ```

2. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

3. Run the development server for the documentation site:

   ```bash
   pnpm www dev
   ```

4. Build the core library:

   ```bash
   pnpm react build
   ```

## Scripts

The repository includes several useful scripts:

- **Build all packages**: `pnpm build`
- **Run the documentation site**: `pnpm www dev`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
