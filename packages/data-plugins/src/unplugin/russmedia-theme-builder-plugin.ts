import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@russmedia/theme-builder-plugin',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/russmediadigital/theme-builder-plugin',
    npm: 'https://www.npmjs.com/package/@russmedia/theme-builder-plugin',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
