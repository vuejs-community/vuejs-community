import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dom-source',
  description: 'Vite plugins that map rendered React and Vue DOM elements back to their source locations.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'react',
    'vue',
    'dom',
    'source-location',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lovetingyuan/vite-plugin-dom-source',
    npm: 'https://www.npmjs.com/package/vite-plugin-dom-source',
  },
  stats: {
    downloads: {
      monthly: 302,
      weekly: 302,
    },
  },
})
