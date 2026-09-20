import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devvibex/plugin',
  description: 'Vite plugins for visual editing, JSX source locations, iframe error postMessage, and a custom Vite error overlay.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'visual-edit',
    'babel',
  ],
  links: {
    github: 'https://github.com/METACREW-COMPANY/lh-vibex-frontend-plugin',
    npm: 'https://www.npmjs.com/package/@devvibex/plugin',
    website: 'https://github.com/METACREW-COMPANY/lh-vibex-frontend-plugin#readme',
  },
  source: {
    github: 'METACREW-COMPANY/lh-vibex-frontend-plugin',
    npm: '@devvibex/plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 7,
    },
  },
})
