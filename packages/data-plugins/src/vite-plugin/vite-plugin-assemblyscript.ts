import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-assemblyscript',
  description: 'Support bulding and using assemblyscript with vitejs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'assemblyscript',
  ],
  source: {
    github: 'olivierchatry/vite-plugin-assemblyscript',
    npm: 'vite-plugin-assemblyscript',
  },
  links: {
    github: 'https://github.com/olivierchatry/vite-plugin-assemblyscript',
    npm: 'https://www.npmjs.com/package/vite-plugin-assemblyscript',
    website: 'https://github.com/olivierchatry/vite-plugin-assemblyscript#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
