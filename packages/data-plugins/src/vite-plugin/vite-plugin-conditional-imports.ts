import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-conditional-imports',
  description: 'Strip conditional imports in production builds and warn on leftover references',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'conditional-imports',
    'tree-shake',
  ],
  source: {
    npm: 'vite-plugin-conditional-imports',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-conditional-imports',
    website: 'https://github.com/EveToolsHQ/vite-plugin-conditional-imports#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 36,
      weekly: 11,
    },
  },
})
