module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint", "react"],
  "rules": {
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "quotes": ["error", "single", {"avoidEscape": true}],
    "import/no-unresolved": "off"
  },
  "extends": [
    "airbnb-base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
};