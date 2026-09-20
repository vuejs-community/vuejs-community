import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@navigare/vite',
  description: 'Navigare lets you quickly build modern single-page apps with Vue and Laravel.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/navigarejs/framework',
    npm: 'https://www.npmjs.com/package/@navigare/vite',
    website: 'https://navigarejs.github.io/framework/',
  },
  source: {
    github: 'navigarejs/framework',
    npm: '@navigare/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 5,
    },
  },
})
