import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dom-source',
  description: 'Vite plugins that map rendered React and Vue DOM elements back to their source locations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'react',
    'vue',
    'dom',
    'source-location',
    'vite-plugin',
  ],
  source: {
    github: 'lovetingyuan/vite-plugin-dom-source',
    npm: 'vite-plugin-dom-source',
  },
  links: {
    github: 'https://github.com/lovetingyuan/vite-plugin-dom-source',
    npm: 'https://www.npmjs.com/package/vite-plugin-dom-source',
    website: 'https://github.com/lovetingyuan/vite-plugin-dom-source#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 328,
      weekly: 13,
    },
  },
})
