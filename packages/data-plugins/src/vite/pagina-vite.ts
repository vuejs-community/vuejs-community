import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pagina/vite',
  description: 'Vite plugin and build pipeline for pagina: hot-reloading dev server, Kineglyph figure pre-rendering, and static site output.',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'documentation',
    'static-site',
    'pagina',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Nano112/pagina',
    npm: 'https://www.npmjs.com/package/@pagina/vite',
  },
  stats: {
    downloads: {
      monthly: 479,
      weekly: 40,
    },
  },
})
