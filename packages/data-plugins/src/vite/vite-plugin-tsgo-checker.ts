import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsgo-checker',
  description: 'Vite plugin that runs TypeScript type checking using the native Go TypeScript compiler (tsgo) in a separate thread.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'tsgo',
    'type-checker',
    'native',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ashley-hunter/vite-plugin-tsgo-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsgo-checker',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 32,
    },
  },
})
