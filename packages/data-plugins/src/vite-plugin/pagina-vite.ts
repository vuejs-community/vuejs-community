import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pagina/vite',
  description: 'Vite plugin and build pipeline for pagina: hot-reloading dev server, Kineglyph figure pre-rendering, and static site output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'documentation',
    'static-site',
    'pagina',
  ],
  source: {
    github: 'Nano112/pagina',
    npm: '@pagina/vite',
  },
  links: {
    github: 'https://github.com/Nano112/pagina',
    npm: 'https://www.npmjs.com/package/@pagina/vite',
    website: 'https://github.com/Nano112/pagina/tree/main/packages/vite#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 506,
      weekly: 21,
    },
  },
})
