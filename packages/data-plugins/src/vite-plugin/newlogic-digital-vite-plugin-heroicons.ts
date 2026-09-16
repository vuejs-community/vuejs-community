import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@newlogic-digital/vite-plugin-heroicons',
  description: 'Vite plugin that collects Heroicons <use href> references, injects a shared SVG sprite into HTML, and emits heroicons.svg at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'heroicons',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'newlogic-digital/vite-plugin-heroicons',
    npm: '@newlogic-digital/vite-plugin-heroicons',
  },
  links: {
    github: 'https://github.com/newlogic-digital/vite-plugin-heroicons',
    npm: 'https://www.npmjs.com/package/@newlogic-digital/vite-plugin-heroicons',
    website: 'https://github.com/newlogic-digital/vite-plugin-heroicons#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 510,
      weekly: 75,
    },
  },
})
