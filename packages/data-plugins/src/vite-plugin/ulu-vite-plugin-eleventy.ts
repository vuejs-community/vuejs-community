import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ulu/vite-plugin-eleventy',
  description: 'Integrates Eleventy into Vite, providing HMR for development and automatic asset hashing for production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Jscherbe/vite-plugin-eleventy',
    npm: 'https://www.npmjs.com/package/@ulu/vite-plugin-eleventy',
    website: 'https://github.com/Jscherbe/vite-plugin-eleventy#readme',
  },
  source: {
    github: 'Jscherbe/vite-plugin-eleventy',
    npm: '@ulu/vite-plugin-eleventy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
