import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@flareapp/vite-plugin-sourcemap-uploader',
  description: 'The Flare Vite plugin helps you send sourcemaps of your compiled JavaScript code to Flare. This way, reports sent using the `@flareapp/flare-client` will be formatted correctly.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'flare',
    'sourcemaps',
  ],
  source: {
    github: 'spatie/flare-vite-plugin-sourcemap-uploader',
    npm: '@flareapp/vite-plugin-sourcemap-uploader',
  },
  links: {
    github: 'https://github.com/spatie/flare-vite-plugin-sourcemap-uploader',
    npm: 'https://www.npmjs.com/package/@flareapp/vite-plugin-sourcemap-uploader',
    website: 'https://flareapp.io',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 4020,
      weekly: 513,
    },
  },
})
