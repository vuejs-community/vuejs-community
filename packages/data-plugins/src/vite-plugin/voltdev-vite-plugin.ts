import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@voltdev/vite-plugin',
  description: 'Compile Volt templates at build time so no compiler ships to the browser.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'volt',
  ],
  links: {
    github: 'https://github.com/volt-js/volt',
    npm: 'https://www.npmjs.com/package/@voltdev/vite-plugin',
    website: 'https://voltjs.dev',
  },
  source: {
    github: 'volt-js/volt',
    npm: '@voltdev/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 136,
      weekly: 4,
    },
  },
})
