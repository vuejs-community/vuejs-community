import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-froede',
  description: 'Vite plugin that annotates JSX elements with their source location during dev, so the froede extension can map clicks back to real code.',
  icon: 'logos:vite-icon',
  version: '0.5.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'froede',
    'visual-editor',
    'jsx',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Mun1to/froede',
    npm: 'vite-plugin-froede',
  },
  links: {
    github: 'https://github.com/Mun1to/froede',
    npm: 'https://www.npmjs.com/package/vite-plugin-froede',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 7,
    },
  },
})
