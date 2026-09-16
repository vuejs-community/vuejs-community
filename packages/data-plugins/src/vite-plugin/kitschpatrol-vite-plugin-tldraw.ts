import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kitschpatrol/vite-plugin-tldraw',
  description: 'Vite plugin enabling module-like import of local tldraw .tldr files with automatic conversion to SVG or PNG.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'tldraw',
    'tldr',
    'vite',
    'diagram',
    'drawing',
    'sketch',
    'whiteboard',
    'import',
    'npm-package',
  ],
  source: {
    github: 'kitschpatrol/vite-plugin-tldraw',
    npm: '@kitschpatrol/vite-plugin-tldraw',
  },
  links: {
    github: 'https://github.com/kitschpatrol/vite-plugin-tldraw',
    npm: 'https://www.npmjs.com/package/@kitschpatrol/vite-plugin-tldraw',
    website: 'https://github.com/kitschpatrol/vite-plugin-tldraw',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 54,
      weekly: 9,
    },
  },
})
