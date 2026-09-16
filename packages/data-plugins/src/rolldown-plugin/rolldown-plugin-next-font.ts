import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-next-font',
  description: 'Use Next.js\'s Font API in Rolldown environments.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'rolldown-plugin',
  ],
  source: {
    github: 'kijv/next-font',
    npm: 'rolldown-plugin-next-font',
  },
  links: {
    github: 'https://github.com/kijv/next-font',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-next-font',
    website: 'https://github.com/kijv/next-font#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
