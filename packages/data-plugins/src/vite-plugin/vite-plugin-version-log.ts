import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-log',
  description: 'A Vite plugin to inject version information into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'version',
    'git',
  ],
  source: {
    npm: 'vite-plugin-version-log',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-log',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
