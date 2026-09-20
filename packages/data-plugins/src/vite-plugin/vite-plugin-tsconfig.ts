import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsconfig',
  description: 'Vite plugin that allows you to use alternate tsconfig files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tsconfig',
  ],
  links: {
    github: 'https://github.com/alienfast/vite-plugin-tsconfig',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsconfig',
    website: 'https://github.com/alienfast/vite-plugin-tsconfig',
  },
  source: {
    github: 'alienfast/vite-plugin-tsconfig',
    npm: 'vite-plugin-tsconfig',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 2684,
      weekly: 409,
    },
  },
})
