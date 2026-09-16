import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yanuaraditia/config-vite',
  description: 'Vite plugin for @runtime-config — HTML injection, virtual modules, HMR, type generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'runtime-config',
    'vite',
    'useRuntimeConfig',
  ],
  source: {
    github: 'yanuaraditia/config',
    npm: '@yanuaraditia/config-vite',
  },
  links: {
    github: 'https://github.com/yanuaraditia/config',
    npm: 'https://www.npmjs.com/package/@yanuaraditia/config-vite',
    website: 'https://github.com/yanuaraditia/config#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
