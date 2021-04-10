# eslint-config-favorite

This project is closed for PRs. Only for my personal use.

## Installation

To install it in your project, simply run the following command:

```shell
yarn add -D https://github.com/stil/eslint-config-favorite.git
```

Then you can create an `.eslintrc` file with following contents

```json
{
  "extends": "eslint-config-favorite"
}
```

## Prettier

Install Prettier VSCode extension first: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

In workspace settings add following setting:
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```