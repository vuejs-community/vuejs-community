import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ecij',
  description: 'Rolldown and Vite plugin to Extract CSS-in-JS',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'css-in-js',
    'rolldown-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nstepien/ecij',
    npm: 'https://www.npmjs.com/package/ecij',
  },
  stats: {
    downloads: {
      monthly: 2623,
      weekly: 629,
    },
  },
})
