import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-purge',
  description: 'Enables PurgeCSS for the build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
    'postcss',
  ],
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-purge',
  },
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-purge',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-purge',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 162,
      weekly: 36,
    },
  },
})
