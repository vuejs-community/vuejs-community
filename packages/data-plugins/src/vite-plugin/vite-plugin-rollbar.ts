import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rollbar',
  description: 'A Vite plugin to upload sourcemaps to Rollbar after build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'source',
    'map',
    'sourcemap',
    'sourcemaps',
    'production',
  ],
  source: {
    github: 'clinggroup/vite-plugin-rollbar',
    npm: 'vite-plugin-rollbar',
  },
  links: {
    github: 'https://github.com/clinggroup/vite-plugin-rollbar',
    npm: 'https://www.npmjs.com/package/vite-plugin-rollbar',
    website: 'https://github.com/clinggroup/vite-plugin-rollbar#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 22555,
      weekly: 5123,
    },
  },
})
