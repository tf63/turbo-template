# Turborepo Template

This repository provides a monorepo setup for web frontend development (React 18, Next.js 14, Chrome extension)

## Commands

The following commands are available:

```shell
pnpm build       # Build the projects for production
pnpm dev         # Start the development server
pnpm lint        # Lint the JavaScript/TypeScript files (not apply changes)
pnpm lint:fix    # Lint the JavaScript/TypeScript files (apply changes)
pnpm test        # Run the unit test
pnpm test:watch  # Run the unit test in watch mode
pnpm test:ui     # Run the unit test with UI
pnpm test:e2e    # Run the end-to-end tests
pnpm test:e2e:ui # Run the end-to-end tests with UI
pnpm serve       # Serve the production build locally for previewing
pnpm clean       # Remove node_modules and generated files (e.g., build artifacts, cache)
pnpm format      # Format the JavaScript/TypeScript files using Biome and other files using Prettier.
pnpm generate    # Generate a component from templates with plop
```

For disabling cache, you can use:

> [!NOTE]
> Note that this disables reading the cache, not writing.

```shell
pnpm build --force
```

Additional filter options for running specific tasks:

```shell
pnpm dev --filter @repo/storybook # --filter or -F
```

## DevTools

This repository utilizes the following tools:
| tool | description |
| --------------------------------------------------------- | -------------------------------------------------------------------------- |
| [turbo](https://turbo.build) | Monorepo build system that speeds up and optimizes the development process |
| [pnpm](https://pnpm.io) | Fast, disk space efficient package manager |
| [biome](https://biomejs.dev/) | Linter for JavaScript, TypeScript, and JSON files |
| [prettier](https://prettier.io/) | Formatter for various file types (JavaScript, TypeScript, Markdown, etc.) |
| [lefthook](https://github.com/evilmartians/lefthook) | Tool for managing Git hooks easily |
| [plop](https://plopjs.com/) | Micro-generator framework that helps create consistent project components |
| [vitest](https://vitest.dev/) | Testing framework for unit testing |
| [playwright](https://playwright.dev/) | Testing framework for e2e testing |
| [commitlint](https://commitlint.js.org/) | Linter for git commit messages to ensure they follow a consistent format |

## Repositories

### apps

`apps` contains web applications that depend only on packages within the `packages` directory, not on other applications.

| repo             | description                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **next**         | [Next.js 14](https://nextjs.org/) (App Router) application with [Tailwind CSS](https://tailwindcss.com/)                                                                          |
| **react**        | [React 18](https://react.dev/) application using [Vite](https://vitejs.dev/) for bundling and [Tailwind CSS](https://tailwindcss.com/)                                            |
| **react-chrome** | Chrome Extension built with [React 18](https://react.dev/), using [CRX](https://crxjs.dev/vite-plugin/), [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/) |
| **storybook**    | [Storybook](https://storybook.js.org/) setup for managing UI components and their development.                                                                                    |

### packages

`packages` contains utilities and components shared across applications.

| repo         | description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| **pkg-tsup** | Template for creating npm packages using [Tsup](https://tsup.egoist.dev/) as the bundler |
| **pkg-vite** | Template for creating npm packages using [Vite](https://vitejs.dev/) as the bundler      |
| **ui**       | Shared UI components library used across applications                                    |

### configs

`configs` contains configuration files shared across applications and packages.

| repo           | description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| **tailwind**   | [Tailwind CSS](https://tailwindcss.com/) configuration shared across applications |
| **typescript** | TypeScript configuration shared across applications                               |
| **constants**  | Common constants and configuration settings used across applications and packages |
