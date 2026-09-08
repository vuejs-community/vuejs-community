import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-readable-css-modules',
  description: 'Enhances readability of the classnames generated for CSS modules in vite',
  icon: 'logos:vite-icon',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'css-modules',
    'css',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'arusak/vite-plugin-readable-css-modules',
    npm: 'vite-plugin-readable-css-modules',
  },
  links: {
    github: 'https://github.com/arusak/vite-plugin-readable-css-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-readable-css-modules',
  },
  stats: {
    downloads: {
      monthly: 440,
      weekly: 228,
    },
  },
})
