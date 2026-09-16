import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-mock-api',
  description: 'Mocking api server in vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'vite-mock-api',
    'mock-api',
    'mocking',
    'api-test',
  ],
  source: {
    github: 'lunaticscode/vite-mock-api',
    npm: 'vite-mock-api',
  },
  links: {
    github: 'https://github.com/lunaticscode/vite-mock-api',
    npm: 'https://www.npmjs.com/package/vite-mock-api',
    website: 'https://github.com/lunaticscode/vite-mock-api#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
