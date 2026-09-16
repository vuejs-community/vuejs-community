import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-inject',
  description: 'A Vite plugin to inject version info into index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'html',
    'inject',
  ],
  source: {
    npm: 'vite-plugin-version-inject',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-inject',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
