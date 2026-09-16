import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-yaml-plugin',
  description: 'Vite plugin to import YAML files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'yaml',
    'yml',
    'import',
  ],
  source: {
    npm: 'vite-yaml-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-yaml-plugin',
    website: 'https://github.com/silverwind/vite-yaml-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5743,
      weekly: 983,
    },
  },
})
