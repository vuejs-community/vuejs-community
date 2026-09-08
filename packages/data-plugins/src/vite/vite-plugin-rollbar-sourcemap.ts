import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rollbar-sourcemap',
  description: 'This is a Vite plugin for uploading Vite-generated Sourcemaps to Rolbar.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-rollbar-sourcemap',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-rollbar-sourcemap',
  },
  stats: {
    downloads: {
      monthly: 13443,
      weekly: 2837,
    },
  },
})
