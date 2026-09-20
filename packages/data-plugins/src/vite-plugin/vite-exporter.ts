import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-exporter',
  description: 'A vite plugin that auto-generate index files to make exports/imports more readable and centralized',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dev-pengi/vite-exporter',
    npm: 'https://www.npmjs.com/package/vite-exporter',
    website: 'https://github.com/dev-pengi/vite-exporter#readme',
  },
  source: {
    github: 'dev-pengi/vite-exporter',
    npm: 'vite-exporter',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
