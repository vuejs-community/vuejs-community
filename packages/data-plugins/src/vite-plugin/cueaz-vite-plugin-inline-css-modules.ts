import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@cueaz/vite-plugin-inline-css-modules',
  description: 'Write CSS modules without leaving your javascript!',
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
    github: 'cueaz/vite-plugin-inline-css-modules',
    npm: '@cueaz/vite-plugin-inline-css-modules',
  },
  links: {
    github: 'https://github.com/cueaz/vite-plugin-inline-css-modules',
    npm: 'https://www.npmjs.com/package/@cueaz/vite-plugin-inline-css-modules',
    website: 'https://github.com/cueaz/vite-plugin-inline-css-modules#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
