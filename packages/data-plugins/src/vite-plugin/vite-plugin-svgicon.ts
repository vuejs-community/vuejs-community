import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svgicon',
  description: 'vite plugin for @yzfe/svgicon',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'svgicon',
    '@yzfe/svgicon',
  ],
  source: {
    npm: 'vite-plugin-svgicon',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-svgicon',
    website: 'https://github.com/MMF-FE/svgicon',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33520,
      weekly: 5953,
    },
  },
})
