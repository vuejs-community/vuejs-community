import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bruh',
  description: 'A vite plugin to integrate with bruh',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'bruh',
    'prerender',
  ],
  source: {
    github: 'Technical-Source/bruh',
    npm: 'vite-plugin-bruh',
  },
  links: {
    github: 'https://github.com/Technical-Source/bruh',
    npm: 'https://www.npmjs.com/package/vite-plugin-bruh',
    website: 'https://github.com/Technical-Source/bruh/tree/main/packages/vite-plugin-bruh#readme',
  },
  stats: {
    stars: 44,
    downloads: {
      monthly: 49,
      weekly: 8,
    },
  },
})
