import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lib-types',
  description: 'Generate dts file while building library, supports vue file',
  version: '3.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite plugin',
    'typescript',
    'dts',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/keuby/vite-plugin-lib-types',
    npm: 'https://www.npmjs.com/package/vite-plugin-lib-types',
  },
  stats: {
    downloads: {
      monthly: 160,
      weekly: 10,
    },
  },
})
