import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@itxch/vite-plugin-externalise-dependencies',
  description: 'A vite plugin which will externalise all packages in the dependencies field in package.json',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'itxch/vite-plugin-externalise-dependencies',
    npm: '@itxch/vite-plugin-externalise-dependencies',
  },
  links: {
    github: 'https://github.com/itxch/vite-plugin-externalise-dependencies',
    npm: 'https://www.npmjs.com/package/@itxch/vite-plugin-externalise-dependencies',
    website: 'https://github.com/itxch/vite-plugin-externalise-dependencies#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 206,
      weekly: 22,
    },
  },
})
