import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nexapp/vite-plugin-react-svg',
  description: 'Import SVG files as React Components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svg',
    'svgo',
    'vite',
    'react',
  ],
  links: {
    github: 'https://github.com/visualfanatic/vite-svg',
    npm: 'https://www.npmjs.com/package/@nexapp/vite-plugin-react-svg',
    website: 'https://github.com/visualfanatic/vite-svg#readme',
  },
  source: {
    github: 'visualfanatic/vite-svg',
    npm: '@nexapp/vite-plugin-react-svg',
  },
  stats: {
    stars: 104,
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
