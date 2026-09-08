import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-si-optimizer',
  description: 'Preprocess Simple Icons\' named imports to default imports',
  icon: '',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'simple-icons',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/t7ru/vite-plugin-si-optimizer',
    npm: 'https://www.npmjs.com/package/vite-plugin-si-optimizer',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 8,
    },
  },
})
