import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-toad',
  description: 'Zero runtime CSS-in-JS powered by Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css-in-js',
  ],
  source: {
    npm: 'vite-plugin-toad',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-toad',
    website: 'https://github.com/MrFoxPro/vite-plugin-toad',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 78,
      weekly: 5,
    },
  },
})
