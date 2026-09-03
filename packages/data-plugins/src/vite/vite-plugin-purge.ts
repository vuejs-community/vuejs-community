import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-purge',
  description: 'Enables PurgeCSS for the build',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
    'postcss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-purge',
  },
  stats: {
    downloads: {
      monthly: 182,
      weekly: 34,
    },
  },
})
