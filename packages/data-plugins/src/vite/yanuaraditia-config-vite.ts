import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yanuaraditia/config-vite',
  description: 'Vite plugin for @runtime-config — HTML injection, virtual modules, HMR, type generation',
  version: '0.1.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'runtime-config',
    'vite',
    'useRuntimeConfig',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yanuaraditia/config',
    npm: 'https://www.npmjs.com/package/@yanuaraditia/config-vite',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
