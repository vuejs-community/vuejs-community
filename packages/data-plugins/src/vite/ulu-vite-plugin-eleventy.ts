import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ulu/vite-plugin-eleventy',
  description: 'Integrates Eleventy into Vite, providing HMR for development and automatic asset hashing for production builds.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vitejs',
    'vite-plugin',
    'eleventy',
    '11ty',
    'eleventy-plugin',
    'hmr',
    'hot-reload',
    'static-site-generator',
    'ssg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Jscherbe/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/@ulu/vite-plugin-eleventy',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
