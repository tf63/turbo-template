# Storybook Environment

[Storybook Official Site](https://storybook.js.org/) [[GitHub](https://github.com/storybookjs/storybook)]

## Getting Started

To get started with this Storybook application, follow these steps:

### Prerequisites

Ensure you have the following installed:

-   Node.js (v20.11.0)
-   pnpm (v8.15.6)

### Installation

```
pnpm i
```

### Development

To start the development server with hot reload enabled, run:

```
pnpm dev
```

The server will start at `localhost:6006`

### Building

To build the application for production, run:

```
pnpm build
```

The build will be output to the `storybook-static/` directory.

## Addon

[Storybook Official Addon](https://storybook.js.org/addons/tag/design) [[GitHub](https://github.com/storybookjs/storybook/tree/next/code/addons)]

### Essential Addons

[@storybook/addon-essentials](https://storybook.js.org/addons/tag/essentials) contain below addons.

| Addon                                                                                                      | Description                                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [@storybook/addon-actions](https://github.com/storybookjs/storybook/tree/next/code/addons/actions)         | Storybook Addon Actions can be used to display data received by event handlers in Storybook.                         |
| [@storybook/addon-controls](https://github.com/storybookjs/storybook/tree/next/code/addons/controls)       | Controls gives you a graphical UI to interact with a component's arguments dynamically, without needing to code.     |
| [@storybook/addon-viewport](https://github.com/storybookjs/storybook/tree/next/code/addons/viewport)       | Storybook Viewport Addon allows your stories to be displayed in different sizes and layouts in Storybook.            |
| [@storybook/addon-backgrounds](https://github.com/storybookjs/storybook/tree/next/code/addons/backgrounds) | Storybook Addon Backgrounds can be used to change background colors inside the preview in Storybook.                 |
| [@storybook/addon-toolbars](https://github.com/storybookjs/storybook/tree/next/code/addons/toolbars)       | The Toolbars addon controls global story rendering options from Storybook's toolbar UI.                              |
| [@storybook/addon-outline](https://github.com/storybookjs/storybook/tree/next/code/addons/outline)         | Storybook Addon Outline can be used for visually debugging CSS layout and alignment inside the preview in Storybook. |
| [@storybook/addon-measure](https://github.com/storybookjs/storybook/tree/next/code/addons/measure)         | Storybook addon for inspecting layouts and visualizing the box model.                                                |
| [@storybook/addon-docs](https://github.com/storybookjs/storybook/tree/next/code/addons/docs)               | Storybook Docs transforms your Storybook stories into world-class component documentation.                           |

### Other Addons

| Addon                                                                                                        | Description                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| [@storybook/addon-a11y](https://github.com/storybookjs/storybook/tree/next/code/addons/a11y)                 | This Storybook addon can be helpful to make your UI components more accessible.                                                   |
| [@storybook/addon-interactions](https://github.com/storybookjs/storybook/tree/next/code/addons/interactions) | Storybook Addon Interactions enables visual debugging of interactions and tests in Storybook.                                     |
| [@storybook/addon-storysource](https://github.com/storybookjs/storybook/tree/next/code/addons/storysource)   | This addon is used to show stories source in the addon panel.                                                                     |
| [@storybook/addon-links](https://github.com/storybookjs/storybook/tree/next/code/addons/links)               | The Storybook Links addon can be used to create links that navigate between stories in Storybook.                                 |
| [@storybook/addon-console](https://github.com/storybookjs/storybook-addon-console)                           | This addon helps you to get all console output in your storybook.                                                                 |
| [@whitespace/storybook-addon-html](https://github.com/whitespace-se/storybook-addon-html)                    | This addon for Storybook adds a tab that displays the compiled HTML for each story. It uses highlight.js for syntax highlighting. |

## References

-   [Storybook公式アドオンをまとめてみた](https://qiita.com/kichion/items/93ffe1ba773d26c20ff6)
-   [デザインシステムのStorybookとChromatic活用の紹介](https://zenn.dev/sakito/articles/7a7c2e0800cf69)
