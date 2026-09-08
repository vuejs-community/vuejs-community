import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-oxc',
  description: 'Oxc integration for Vite',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'oxc',
    'transform',
    'typescript',
    'jsx',
    'minify',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Sunny-117/vite-plugin-oxc',
    npm: 'vite-plugin-oxc',
  },
  links: {
    github: 'https://github.com/Sunny-117/vite-plugin-oxc',
    npm: 'https://www.npmjs.com/package/vite-plugin-oxc',
  },
  stats: {
    downloads: {
      monthly: 129,
      weekly: 15,
    },
  },
})
