import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-stylex-dev',
  description: 'an unofficial stylex vite plugin',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'stylex',
    'experimental',
    'css-in-js',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nonzzz/vite-plugin-stylex',
    npm: 'https://www.npmjs.com/package/vite-plugin-stylex-dev',
    website: 'https://github.com/nonzzz/vite-plugin-stylex',
  },
  source: {
    github: 'nonzzz/vite-plugin-stylex',
    npm: 'vite-plugin-stylex-dev',
  },
  stats: {
    stars: 51,
    downloads: {
      monthly: 4058,
      weekly: 650,
    },
  },
})
