import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'leaner-jsx',
  description: 'JSX transformer for Leaner.js',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'leaner',
    'jsx',
    'vite-plugin',
    'rollup-plugin',
    'rolldown-plugin',
  ],
  source: {
    github: 'leaner-js/leaner',
    npm: 'leaner-jsx',
  },
  links: {
    github: 'https://github.com/leaner-js/leaner',
    npm: 'https://www.npmjs.com/package/leaner-jsx',
    website: 'https://leanerjs.org/',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 172,
      weekly: 6,
    },
  },
})
