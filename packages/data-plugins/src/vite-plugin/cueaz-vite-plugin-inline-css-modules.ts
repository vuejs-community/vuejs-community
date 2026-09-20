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
  links: {
    github: 'https://github.com/cueaz/vite-plugin-inline-css-modules',
    npm: 'https://www.npmjs.com/package/@cueaz/vite-plugin-inline-css-modules',
    website: 'https://github.com/cueaz/vite-plugin-inline-css-modules#readme',
  },
  source: {
    github: 'cueaz/vite-plugin-inline-css-modules',
    npm: '@cueaz/vite-plugin-inline-css-modules',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
