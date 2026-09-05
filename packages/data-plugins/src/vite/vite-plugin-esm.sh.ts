import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-esm.sh',
  description: 'Rewrite imports with esm.sh at build time',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'esm.sh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/daniakash/vite-plugin-esm.sh',
    npm: 'https://www.npmjs.com/package/vite-plugin-esm.sh',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 13,
    },
  },
})
