import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-si-optimizer',
  description: 'Preprocess Simple Icons\' named imports to default imports',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'simple-icons',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/t7ru/vite-plugin-si-optimizer',
    npm: 'https://www.npmjs.com/package/vite-plugin-si-optimizer',
    website: 'https://github.com/t7ru/vite-plugin-si-optimizer#readme',
  },
  source: {
    github: 't7ru/vite-plugin-si-optimizer',
    npm: 'vite-plugin-si-optimizer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 6,
    },
  },
})
