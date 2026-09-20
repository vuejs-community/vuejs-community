import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-esm.sh',
  description: 'Rewrite imports with esm.sh at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'esm.sh',
  ],
  links: {
    github: 'https://github.com/daniakash/vite-plugin-esm.sh',
    npm: 'https://www.npmjs.com/package/vite-plugin-esm.sh',
    website: 'https://github.com/daniakash/vite-plugin-esm.sh#readme',
  },
  source: {
    github: 'daniakash/vite-plugin-esm.sh',
    npm: 'vite-plugin-esm.sh',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
