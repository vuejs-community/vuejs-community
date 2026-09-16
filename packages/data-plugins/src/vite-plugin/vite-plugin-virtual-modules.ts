import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-virtual-modules',
  description: 'Vite plugin to load customize virtual modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'virtual-modules',
  ],
  source: {
    github: 'windsonR/vite-plugin-virtual-modules',
    npm: 'vite-plugin-virtual-modules',
  },
  links: {
    github: 'https://github.com/windsonR/vite-plugin-virtual-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-virtual-modules',
    website: 'https://github.com/windsonR/vite-plugin-virtual-modules#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 34,
      weekly: 11,
    },
  },
})
