import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tsgo-checker',
  description: 'Vite plugin that runs TypeScript type checking using the native Go TypeScript compiler (tsgo) in a separate thread.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'tsgo',
    'type-checker',
    'native',
  ],
  source: {
    github: 'ashley-hunter/vite-plugin-tsgo-checker',
    npm: 'vite-plugin-tsgo-checker',
  },
  links: {
    github: 'https://github.com/ashley-hunter/vite-plugin-tsgo-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-tsgo-checker',
    website: 'https://github.com/ashley-hunter/vite-plugin-tsgo-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 97,
      weekly: 34,
    },
  },
})
