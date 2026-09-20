import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-purgecss',
  description: 'Purges CSS based on HTML output',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'purgecss',
  ],
  links: {
    github: 'https://github.com/Jax-p/vite-plugin-html-purgecss',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-purgecss',
    website: 'https://github.com/Jax-p/vite-plugin-html-purgecss#readme',
  },
  source: {
    github: 'Jax-p/vite-plugin-html-purgecss',
    npm: 'vite-plugin-html-purgecss',
  },
  stats: {
    stars: 16,
    downloads: {
      monthly: 2574,
      weekly: 587,
    },
  },
})
