import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minissg',
  description: 'Minimum-sized static site generator as a Vite plugin',
  icon: 'logos:vite-icon',
  version: '5.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'ssg',
    'ssr',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'uenoB/minissg',
    npm: 'vite-plugin-minissg',
  },
  links: {
    github: 'https://github.com/uenoB/minissg',
    npm: 'https://www.npmjs.com/package/vite-plugin-minissg',
  },
  stats: {
    downloads: {
      monthly: 76,
      weekly: 5,
    },
  },
})
