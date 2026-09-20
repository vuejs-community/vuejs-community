import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sails-vite-plugin',
  description: 'Sails plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'Sails',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DominusKelvin/sails-vite-plugin',
    npm: 'https://www.npmjs.com/package/sails-vite-plugin',
    website: 'https://github.com/DominusKelvin/sails-vite-plugin#readme',
  },
  source: {
    github: 'DominusKelvin/sails-vite-plugin',
    npm: 'sails-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
