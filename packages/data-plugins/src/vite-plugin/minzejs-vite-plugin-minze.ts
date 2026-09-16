import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minzejs/vite-plugin-minze',
  description: 'Vite plugin for Minze dev environment.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'minze',
    'minzejs',
  ],
  source: {
    github: 'n6ai/minze',
    npm: '@minzejs/vite-plugin-minze',
  },
  links: {
    github: 'https://github.com/n6ai/minze',
    npm: 'https://www.npmjs.com/package/@minzejs/vite-plugin-minze',
    website: 'https://github.com/n6ai/minze/tree/main/packages/vite-plugin-minze#readme',
  },
  stats: {
    stars: 571,
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
