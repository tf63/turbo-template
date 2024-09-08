# Tailwind Config

[Tailwind CSS](https://tailwindcss.com/) and PostCSS configuration shared across applications

-   Contains generic styles and animations
-   Builds the Tailwind classes included in the repository and compile them into `dist/index.css`
-   `dist/index.css` is exported as `@repo/tailwind/styles.css`

| package                     | description        |
| --------------------------- | ------------------ |
| `@repo/tailwind/tailwind`   | tailwind.config.ts |
| `@repo/tailwind/postcss`    | postcss.config.mjs |
| `@repo/tailwind/styles.css` | `dist/index.css`   |
