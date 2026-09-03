import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-esm-to-systemjs',
  description: 'Vite plugin that transforms ESM output to SystemJS format using Babel',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'systemjs',
    'esm',
    'babel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AjCu/vite-plugin-esm-to-systemjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-esm-to-systemjs',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
