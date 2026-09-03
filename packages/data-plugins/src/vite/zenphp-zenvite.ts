import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zenphp/zenvite',
  description: 'Plugin for running a Vite dev server for your Zen applications.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'zen',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@zenphp/zenvite',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
