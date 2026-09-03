import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@newlogic-digital/vite-plugin-heroicons',
  description: 'Vite plugin that collects Heroicons <use href> references, injects a shared SVG sprite into HTML, and emits heroicons.svg at build time.',
  version: '1.4.1',
  category: 'plugin',
  tags: [
    'heroicons',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/newlogic-digital/vite-plugin-heroicons',
    npm: 'https://www.npmjs.com/package/@newlogic-digital/vite-plugin-heroicons',
  },
  stats: {
    downloads: {
      monthly: 898,
      weekly: 122,
    },
  },
})
