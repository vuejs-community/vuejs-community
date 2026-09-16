import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-link',
  description: 'Modular Vite/Rolldown build, diagnostics, asset and managed-runtime toolkit for Node.js backends.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nestjs',
    'vite',
    'vite-plugin',
    'rolldown',
    'nodejs',
    'adapter',
    'framework-agnostic',
    'backend',
    'builder',
    'hmr',
    'restart',
  ],
  source: {
    github: 'Kucuks/vite-link',
    npm: 'vite-link',
  },
  links: {
    github: 'https://github.com/Kucuks/vite-link',
    npm: 'https://www.npmjs.com/package/vite-link',
    website: 'https://github.com/Kucuks/vite-link#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 337,
      weekly: 17,
    },
  },
})
