import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ecij',
  description: 'Zero-runtime CSS-in-JS for Rolldown and Vite: statically extracts css tagged template literals',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'css-in-js',
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'zero-runtime',
  ],
  links: {
    github: 'https://github.com/nstepien/ecij',
    npm: 'https://www.npmjs.com/package/ecij',
    website: 'https://github.com/nstepien/ecij#readme',
  },
  source: {
    github: 'nstepien/ecij',
    npm: 'ecij',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 3463,
      weekly: 1264,
    },
  },
})
