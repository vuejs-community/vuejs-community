import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-froede',
  description: 'Vite plugin that annotates JSX elements with their source location during dev, so the froede extension can map clicks back to real code.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'froede',
    'visual-editor',
    'jsx',
    'devtools',
  ],
  source: {
    github: 'Mun1to/froede',
    npm: 'vite-plugin-froede',
  },
  links: {
    github: 'https://github.com/Mun1to/froede',
    npm: 'https://www.npmjs.com/package/vite-plugin-froede',
    website: 'https://github.com/Mun1to/froede#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 41,
      weekly: 1,
    },
  },
})
