module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
  },
};
