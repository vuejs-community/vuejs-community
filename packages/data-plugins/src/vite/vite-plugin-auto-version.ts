import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-version',
  description: 'Auto generate project version when vite build',
  icon: 'logos:vite-icon',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'version',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'elvinsun0826/vite-plugin-auto-version',
    npm: 'vite-plugin-auto-version',
  },
  links: {
    github: 'https://github.com/elvinsun0826/vite-plugin-auto-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-version',
  },
  stats: {
    downloads: {
      monthly: 73,
      weekly: 7,
    },
  },
})
