# Contributing to Bun UI

Thank you for your interest in contributing to **Bun UI**! We welcome
contributions of all kinds, including bug fixes, new features, documentation
improvements, and more.

## Structure

```plaintext
apps
└── www
    └── src
        ├── app
        ├── components
        ├── content
        └── examples
packages
└── react

```

## Development

### Fork the Repository

Fork the repository to your GitHub account and clone it locally:

```bash
git clone https://github.com/your-username/bun-ui.git
cd bun-ui
```

### Create a Branch

Create a new branch for your changes:

```bash
git checkout -b your-new-branch
```

### Install Dependencies

```bash
pnpm install
```

### Run the Development Server

1. Run the bun-ui.com website

```bash
pnpm --filter=www dev
```

2. Run the bun-ui package

```bash
pnpm --filter=react dev
```
