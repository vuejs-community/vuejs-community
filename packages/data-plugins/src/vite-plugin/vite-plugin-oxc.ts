import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oxc',
  description: 'Oxc integration for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'oxc',
    'transform',
    'typescript',
    'jsx',
    'minify',
  ],
  source: {
    github: 'Sunny-117/vite-plugin-oxc',
    npm: 'vite-plugin-oxc',
  },
  links: {
    github: 'https://github.com/Sunny-117/vite-plugin-oxc',
    npm: 'https://www.npmjs.com/package/vite-plugin-oxc',
    website: 'https://github.com/Sunny-117/vite-plugin-oxc#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 81,
      weekly: 10,
    },
  },
})
