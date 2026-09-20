import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitjs/vit',
  description: '🛠 React application framework inspired by UmiJS.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vit',
    'vite-plugin',
    'vite-plugin-react',
  ],
  links: {
    github: 'https://github.com/vitjs/vit',
    npm: 'https://www.npmjs.com/package/@vitjs/vit',
    website: 'https://github.com/vitjs/vit#readme',
  },
  source: {
    github: 'vitjs/vit',
    npm: '@vitjs/vit',
  },
  stats: {
    stars: 98,
    downloads: {
      monthly: 102,
      weekly: 48,
    },
  },
})
