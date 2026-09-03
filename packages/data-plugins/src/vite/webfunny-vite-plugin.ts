import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'webfunny-vite-plugin',
  description: 'Vite plugin for uploading source maps to Webfunny monitoring system',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'upload',
    'webfunny',
    'monitoring',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/a597873885/webfunny-vite-plugin',
    npm: 'https://www.npmjs.com/package/webfunny-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 158,
      weekly: 154,
    },
  },
})
