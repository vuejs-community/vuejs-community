import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minissg',
  description: 'Minimum-sized static site generator as a Vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'ssg',
    'ssr',
  ],
  links: {
    github: 'https://github.com/uenoB/minissg',
    npm: 'https://www.npmjs.com/package/vite-plugin-minissg',
    website: 'https://github.com/uenoB/minissg/tree/main/packages/vite-plugin-minissg/#readme',
  },
  source: {
    github: 'uenoB/minissg',
    npm: 'vite-plugin-minissg',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
