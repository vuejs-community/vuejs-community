import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@typestyles/vite',
  description: 'Vite plugin for typestyles HMR support',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typestyles',
    'hmr',
    'css-in-js',
  ],
  links: {
    github: 'https://github.com/type-styles/typestyles',
    npm: 'https://www.npmjs.com/package/@typestyles/vite',
    website: 'https://github.com/type-styles/typestyles#readme',
  },
  source: {
    github: 'type-styles/typestyles',
    npm: '@typestyles/vite',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 712,
      weekly: 26,
    },
  },
})
