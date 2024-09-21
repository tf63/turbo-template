# React Chrome Extension

Chrome Extension built with [React 18](https://react.dev/), using [CRX](https://crxjs.dev/vite-plugin/), [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

To get started with this Chrome Extension, follow these steps:

### Prerequisites

Ensure you have the following installed:

-   Node.js (v20.11.0)
-   pnpm (v8.15.6)

### Installation

```
pnpm i
```

### Development

To start the development server, run:

```
pnpm dev
```

This will build the extension, and the CRX plugin will handle reloading the extension as you make changes. The build artifacts will be output to the `dist/` directory.

### Building

To build the extension for production, run:

```
pnpm build
```

The build will be output to the `dist/` directory.

### Loading the Extension in Chrome

Open Chrome and go to `chrome://extensions/`.

Enable `Developer mode` using the toggle switch in the top right corner.

Click `Load unpacked` and select the dist directory.
Your extension should now be loaded in Chrome.
