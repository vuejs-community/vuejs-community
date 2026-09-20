import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-version',
  description: 'Auto generate project version when vite build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'version',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/elvinsun0826/vite-plugin-auto-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-version',
    website: 'https://github.com/elvinsun0826/vite-plugin-auto-version#readme',
  },
  source: {
    github: 'elvinsun0826/vite-plugin-auto-version',
    npm: 'vite-plugin-auto-version',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 67,
      weekly: 7,
    },
  },
})
