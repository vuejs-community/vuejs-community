import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@raquo/vite-plugin-glob-resolver',
  description: 'Vite plugin to resolve glob patterns in static imports',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'scala',
    'scala-js',
  ],
  links: {
    github: 'https://github.com/raquo/vite-plugin-glob-resolver',
    npm: 'https://www.npmjs.com/package/@raquo/vite-plugin-glob-resolver',
    website: 'https://github.com/raquo/vite-plugin-glob-resolver',
  },
  source: {
    github: 'raquo/vite-plugin-glob-resolver',
    npm: '@raquo/vite-plugin-glob-resolver',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 66,
      weekly: 13,
    },
  },
})
