import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'inline-css-modules',
  description: 'Zero-runtime CSS Modules written inline in your JS/TS files via a css template literal, scoped and extracted at build time by Vite or esbuild.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-modules',
    'inline-css',
    'vite-plugin',
    'esbuild-plugin',
  ],
  source: {
    npm: 'inline-css-modules',
  },
  links: {
    npm: 'https://www.npmjs.com/package/inline-css-modules',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 6,
    },
  },
})
