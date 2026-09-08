import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bruh',
  description: 'A vite plugin to integrate with bruh',
  icon: 'logos:vite-icon',
  version: '0.6.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'bruh',
    'prerender',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Technical-Source/bruh',
    npm: 'vite-plugin-bruh',
  },
  links: {
    github: 'https://github.com/Technical-Source/bruh',
    npm: 'https://www.npmjs.com/package/vite-plugin-bruh',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 11,
    },
  },
})
