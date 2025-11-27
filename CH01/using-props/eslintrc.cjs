module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier', // 🚀 turns off ESLint rules that conflict with Prettier
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // Keep indentation consistent for your Indent Rainbow extension
        indent: ['off'], // Prettier handles indentation
        '@typescript-eslint/indent': ['off'],
        'react/prop-types': 'off', // not needed in TS
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
