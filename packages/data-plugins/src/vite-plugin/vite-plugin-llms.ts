import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-llms',
  description: 'Vite plugin for llms.txt specification support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'llms',
    'markdown',
  ],
  links: {
    github: 'https://github.com/saschaseniuk/vite-plugin-llms',
    npm: 'https://www.npmjs.com/package/vite-plugin-llms',
    website: 'https://github.com/saschaseniuk/vite-plugin-llms#readme',
  },
  source: {
    github: 'saschaseniuk/vite-plugin-llms',
    npm: 'vite-plugin-llms',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 581,
      weekly: 141,
    },
  },
})
