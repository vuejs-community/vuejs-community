import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'best-i18n',
  description: 'Compile-time i18n: translations inlined at the call site, per-locale builds collapse to plain strings, PO-based workflow',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'i18n',
    'internationalization',
    'macro',
    'compile-time',
    'vite-plugin',
    'next',
    'nextjs',
    'gettext',
    'po',
    'react',
    'tree-shaking',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Debbl/best-i18n',
    npm: 'https://www.npmjs.com/package/best-i18n',
  },
  stats: {
    downloads: {
      monthly: 300,
      weekly: 300,
    },
  },
})
