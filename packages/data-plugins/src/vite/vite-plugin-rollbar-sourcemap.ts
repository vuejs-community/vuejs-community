import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rollbar-sourcemap',
  description: 'This is a Vite plugin for uploading Vite-generated Sourcemaps to Rolbar.',
  version: '0.0.13',
  category: 'plugin',
  tags: [
    'rollbar',
    'sourcemap',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-rollbar-sourcemap',
  },
  stats: {
    downloads: {
      monthly: 14100,
      weekly: 3009,
    },
  },
})
