# Turborepo Tailwind CSS

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

-   `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
-   `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
-   `@repo/config-typescript`: `tsconfig.json`s used throughout the monorepo
-   `@repo/config-tailwind`: `tailwind.config.ts` and `postcss.config.mjs` used throughout the monorepo

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

-   Make sharing one `tailwind.config.js` to apps and packages as easy as possible.
-   Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
-   Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
-   Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities
