import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@seamstack/vite',
  description: 'Vite frontend adapter and plugin for SeamStack — wires Vite\'s dev server and SSR build into the seam pipeline.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'seamstack',
    'vite',
    'ssr',
    'adapter',
    'frontend',
    'vite-plugin',
  ],
  source: {
    github: 'NotJustAnna/SeamStack',
    npm: '@seamstack/vite',
  },
  links: {
    github: 'https://github.com/NotJustAnna/SeamStack',
    npm: 'https://www.npmjs.com/package/@seamstack/vite',
    website: 'https://github.com/NotJustAnna/SeamStack#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 869,
      weekly: 16,
    },
  },
})
