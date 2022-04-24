# best eslint prettier typesrcipt config

## Add prettier & eslint to your project

Using npm, install the following packages:

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
```

Using yarn: 

```bash
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
```

create a .eslintrc.js file in your project root directory and add the following to it:

> .eslintrc.js

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
```

> .prettierrc

```js
{
    "singleQuote": true,
    "trailingComma": "all"
}
```

You can add this line to your package.json file to enable eslint and prettier:

```json
"scripts": {
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix"
  },
```

Now you can run `npm run lint` to lint your code.
