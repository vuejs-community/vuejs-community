import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@solidmaterial/vite-plugin-solid-svg',
  description: 'Import SVG files as Solid.js Components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'solid',
    'solidjs',
    'svg',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mprovok/solid-material',
    npm: 'https://www.npmjs.com/package/@solidmaterial/vite-plugin-solid-svg',
    website: 'https://github.com/mprovok/solid-material#readme',
  },
  source: {
    github: 'mprovok/solid-material',
    npm: '@solidmaterial/vite-plugin-solid-svg',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 342,
      weekly: 6,
    },
  },
})
