import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-optimizer',
  description: 'Vite plugin for automatic production bundle optimization via intelligent chunk splitting, vendor grouping, shared dependency extraction, and compression.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'bundle',
    'optimizer',
    'chunks',
    'code-splitting',
    'bundle optimization',
    'vendor',
    'gzip',
    'brotli',
    'rollup',
  ],
  links: {
    github: 'https://github.com/sergeybruska/vite-bundle-optimizer',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-optimizer',
    website: 'https://github.com/sergeybruska/vite-bundle-optimizer#readme',
  },
  source: {
    github: 'sergeybruska/vite-bundle-optimizer',
    npm: 'vite-plugin-bundle-optimizer',
  },
})
