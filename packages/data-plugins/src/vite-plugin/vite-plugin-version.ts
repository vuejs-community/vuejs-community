import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version',
  description: 'Automatically put the version file in your project dist folder',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'version',
  ],
  links: {
    github: 'https://github.com/yrming/vite-plugin-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-version',
    website: 'https://github.com/yrming/vite-plugin-version#readme',
  },
  source: {
    github: 'yrming/vite-plugin-version',
    npm: 'vite-plugin-version',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 403,
      weekly: 54,
    },
  },
})
