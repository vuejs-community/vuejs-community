import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@troggy/vite-plugin-nunjucks',
  description: 'Vite plugin for Nunjucks',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'nunjucks',
  ],
  source: {
    github: 'Jax-p/vite-plugin-nunjucks',
    npm: '@troggy/vite-plugin-nunjucks',
  },
  links: {
    github: 'https://github.com/Jax-p/vite-plugin-nunjucks',
    npm: 'https://www.npmjs.com/package/@troggy/vite-plugin-nunjucks',
    website: 'https://github.com/Jax-p/vite-plugin-nunjucks#readme',
  },
  stats: {
    stars: 42,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
