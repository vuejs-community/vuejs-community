import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@itxch/vite-plugin-externalise-dependencies',
  description: 'A vite plugin which will externalise all packages in the dependencies field in package.json',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/itxch/vite-plugin-externalise-dependencies',
    npm: 'https://www.npmjs.com/package/@itxch/vite-plugin-externalise-dependencies',
  },
  stats: {
    downloads: {
      monthly: 324,
      weekly: 44,
    },
  },
})
