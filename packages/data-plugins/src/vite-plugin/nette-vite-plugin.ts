import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nette/vite-plugin',
  description: 'Nette plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nette',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nette/vite-plugin',
    npm: 'https://www.npmjs.com/package/@nette/vite-plugin',
    website: 'https://doc.nette.org/en/assets/vite',
  },
  source: {
    github: 'nette/vite-plugin',
    npm: '@nette/vite-plugin',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 2292,
      weekly: 498,
    },
  },
})
