import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rollbar-sourcemap',
  description: 'This is a Vite plugin for uploading Vite-generated Sourcemaps to Rolbar.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollbar',
    'sourcemap',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-rollbar-sourcemap',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-rollbar-sourcemap',
    website: 'https://github.com/madogiwa0124/vite-plugin-rollbar-sourcemap#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12202,
      weekly: 2587,
    },
  },
})
