module.exports = {
  env: {
    browser: true,
    es2022: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'unused-imports'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'eol-last': ['error', 'always'],
    'no-duplicate-imports': 'error',
    'no-empty-pattern': 'off',
    'react/display-name': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'off',
    'unused-imports/no-unused-imports': 'error',
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    camelcase: 'off',
    quotes: 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
}
