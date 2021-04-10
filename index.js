module.exports = {
  extends: [
    // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/index.js
    // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js
    "airbnb-typescript",
    // https://github.com/prettier/eslint-config-prettier#installation
    "prettier"
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    // Required or else ESLint will complain about use of "document" global variable.
    browser: false,
  },
  // If you add any rule, please put a short comment what is your reasoning.
  rules: {
    // Named exports are better for discoverability and refactorings.
    // Let's disable default exports and force named exports.
    "import/prefer-default-export": "off",
    "import/no-default-export": ["warn"],

    // Discussion: https://softwareengineering.stackexchange.com/a/199317
    "@typescript-eslint/no-use-before-define": "off",

    // Those rules are stupid.
    "no-plusplus": "off",
    "no-continue": "off",

    // Let's leave it to developer whether to choose <>...</> or <Fragment>.
    "react/jsx-fragments": "off",

    // Reduce severity to warning.
    "@typescript-eslint/no-unused-vars": ["warn"],

    // Forcing to always use destructuring is counterproductive sometimes.
    "react/destructuring-assignment": "off",

    // Disable a11y altogether, it makes sense to have those rules when you fully commit to supporting text-readers.
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "jsx-a11y/alt-text": "off",

    // This is very useful and should not be prohibited.
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",

    // Should be eventually removed. Added temporarily, for easier adaptation to new rules.
    "import/no-cycle": "off",
    "class-methods-use-this": "off",

    // await is perfectly fine in the loop.
    "no-await-in-loop": "off",

    // GraphQL defines __typename.
    "no-underscore-dangle": "off",

    // Nesting ternary is sometimes useful, especially in React.
    "no-nested-ternary": "off",

    // Param reassign is used in immer.
    "no-param-reassign": "off",
  },
  settings: {
    // Otherwise we'll get a following message:
    // "'electron' should be listed in the project's dependencies, not devDependencies"
    "import/core-modules": ["electron"],
  },
};
