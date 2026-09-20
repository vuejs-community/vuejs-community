import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@maravilla-labs/vite-plugin',
  description: 'Vite plugin for Maravilla Runtime development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'maravilla',
    'edge',
    'runtime',
  ],
  links: {
    github: 'https://github.com/solutas/maravilla-runtime',
    npm: 'https://www.npmjs.com/package/@maravilla-labs/vite-plugin',
    website: 'https://github.com/solutas/maravilla-runtime#readme',
  },
  source: {
    github: 'solutas/maravilla-runtime',
    npm: '@maravilla-labs/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 677,
      weekly: 68,
    },
  },
})
