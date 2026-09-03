import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'inline-css-modules',
  description: 'Zero-runtime CSS Modules written inline in your JS/TS files via a css template literal, scoped and extracted at build time by Vite or esbuild.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'css-modules',
    'inline-css',
    'vite-plugin',
    'esbuild-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/inline-css-modules',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 3,
    },
  },
})
