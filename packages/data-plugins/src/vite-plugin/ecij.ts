import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ecij',
  description: 'Rolldown and Vite plugin to Extract CSS-in-JS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-in-js',
    'rolldown-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'nstepien/ecij',
    npm: 'ecij',
  },
  links: {
    github: 'https://github.com/nstepien/ecij',
    npm: 'https://www.npmjs.com/package/ecij',
    website: 'https://github.com/nstepien/ecij#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 3463,
      weekly: 1264,
    },
  },
})
