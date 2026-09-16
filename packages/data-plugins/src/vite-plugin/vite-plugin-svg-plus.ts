import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-plus',
  description: 'Vite plugin to optimize and transform imported SVGs as component, sprite, datauri or injected html.',
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
    github: 'jariberg/vite-plugin-svg-plus',
    npm: 'vite-plugin-svg-plus',
  },
  links: {
    github: 'https://github.com/jariberg/vite-plugin-svg-plus',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-plus',
    website: 'https://github.com/jariberg/vite-plugin-svg-plus#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
