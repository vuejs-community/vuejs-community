import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-plugin-next-font',
  description: 'Use Next.js\'s Font API in Rolldown environments.',
  icon: 'logos:rolldown-icon',
  version: '1.0.0-beta.1',
  category: 'plugin',
  tags: [
    'rolldown-plugin',
  ],
  types: [
    'rolldown-plugin',
  ],
  source: {
    github: 'kijv/next-font',
    npm: 'rolldown-plugin-next-font',
  },
  links: {
    github: 'https://github.com/kijv/next-font',
    npm: 'https://www.npmjs.com/package/rolldown-plugin-next-font',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
