import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@flareapp/vite-plugin-sourcemap-uploader',
  description: 'The Flare Vite plugin helps you send sourcemaps of your compiled JavaScript code to Flare. This way, reports sent using the `@flareapp/flare-client` will be formatted correctly.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'flare',
    'sourcemaps',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/spatie/flare-vite-plugin-sourcemap-uploader',
    npm: 'https://www.npmjs.com/package/@flareapp/vite-plugin-sourcemap-uploader',
  },
  stats: {
    downloads: {
      monthly: 5193,
      weekly: 1299,
    },
  },
})
