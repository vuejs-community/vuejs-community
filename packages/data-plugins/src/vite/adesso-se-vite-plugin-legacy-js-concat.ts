import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@adesso-se/vite-plugin-legacy-js-concat',
  description: 'Concatenate legacy JavaScript files in a specific order into a single bundle for Vite, replacement for gulp-concat.',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'legacy',
    'concat',
    'javascript',
    'gulp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/adessoSE/vite-plugin-legacy-js-concat',
    npm: 'https://www.npmjs.com/package/@adesso-se/vite-plugin-legacy-js-concat',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
