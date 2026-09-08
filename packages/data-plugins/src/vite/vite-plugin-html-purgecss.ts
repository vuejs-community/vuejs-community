import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-purgecss',
  description: 'Purges CSS based on HTML output',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Jax-p/vite-plugin-html-purgecss',
    npm: 'vite-plugin-html-purgecss',
  },
  links: {
    github: 'https://github.com/Jax-p/vite-plugin-html-purgecss',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-purgecss',
  },
  stats: {
    downloads: {
      monthly: 2493,
      weekly: 491,
    },
  },
})
