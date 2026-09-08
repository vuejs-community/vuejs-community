import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stylex-dev',
  description: 'an unofficial stylex vite plugin',
  icon: 'logos:vite-icon',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'stylex',
    'experimental',
    'css-in-js',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'nonzzz/vite-plugin-stylex',
    npm: 'vite-plugin-stylex-dev',
  },
  links: {
    github: 'https://github.com/nonzzz/vite-plugin-stylex',
    npm: 'https://www.npmjs.com/package/vite-plugin-stylex-dev',
  },
  stats: {
    downloads: {
      monthly: 5052,
      weekly: 1600,
    },
  },
})
