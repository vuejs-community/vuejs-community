import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-specifier',
  description: 'Vite plugin to update your ESM and CJS specifiers.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'specifiers',
    'esm',
    'cjs',
    '.d.ts',
    'rename',
    'extensions',
    'writeBundle',
    'transform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/morganney/vite-plugin-specifier',
    npm: 'https://www.npmjs.com/package/vite-plugin-specifier',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 8,
    },
  },
})
