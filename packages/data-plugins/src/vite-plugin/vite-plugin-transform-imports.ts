import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform-imports',
  description: 'Transforms member style imports into default style imports',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'justforuse/vite-plugin-transform-imports',
    npm: 'vite-plugin-transform-imports',
  },
  links: {
    github: 'https://github.com/justforuse/vite-plugin-transform-imports',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform-imports',
    website: 'https://github.com/justforuse/vite-plugin-transform-imports#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
