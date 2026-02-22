import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

const config = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      '@next/next/no-img-element': 'error',
      'react/no-unescaped-entities': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
    },
  },
];

export default config;
