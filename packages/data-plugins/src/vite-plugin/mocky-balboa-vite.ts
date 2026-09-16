import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mocky-balboa/vite',
  description: 'Vite dev server plugin for Mocky Balboa.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'mocky',
    'balboa',
    'dev',
    'mocking',
    'network',
    'testing',
    'tests',
    'integration',
    'server',
  ],
  source: {
    github: 'mocky-balboa/mocky-balboa',
    npm: '@mocky-balboa/vite',
  },
  links: {
    github: 'https://github.com/mocky-balboa/mocky-balboa',
    npm: 'https://www.npmjs.com/package/@mocky-balboa/vite',
    website: 'https://docs.mockybalboa.com',
  },
  stats: {
    stars: 32,
    downloads: {
      monthly: 1333,
      weekly: 199,
    },
  },
})
