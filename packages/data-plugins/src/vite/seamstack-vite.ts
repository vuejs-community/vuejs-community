import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@seamstack/vite',
  description: 'Vite frontend adapter and plugin for SeamStack — wires Vite\'s dev server and SSR build into the seam pipeline.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'seamstack',
    'vite',
    'ssr',
    'adapter',
    'frontend',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NotJustAnna/SeamStack',
    npm: 'https://www.npmjs.com/package/@seamstack/vite',
  },
  stats: {
    downloads: {
      monthly: 810,
      weekly: 792,
    },
  },
})
