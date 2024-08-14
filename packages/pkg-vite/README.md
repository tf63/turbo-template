# pkg-vite

This is a template for creating npm packages that use [Vite](https://vitejs.dev/) to build TypeScript projects.

If you want to publish this package to npm, make sure your `package.json` includes the following configuration:

```package.json
    "repository": {
        "type": "git",
        "url": "git+https://github.com/tf63/turbo-template",
        "directory": "packages/pkg-vite"
    },
    "bugs": {
        "url": "https://github.com/tf63/turbo-template/issues"
    },
    "publishConfig": {
        "access": "public"
    }
```

## Publish the package to npm

To publish this package to npm, follow these steps:

### 1. Log in to npm

Ensure you are logged into your npm account by running the following command:

```shell
pnpm login
```

### 2. Publish the package

Once logged in, you can publish the package using the command:

```shell
pnpm publish
```

This will make the package publicly available on npm.
