import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-solid-svg2',
  description: 'Import SVG files as Solid.js Components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svg',
    'svgo',
    'vite',
    'solid',
    'solidjs',
  ],
  links: {
    github: 'https://github.com/yfrans/vite-plugin-solid-svg',
    npm: 'https://www.npmjs.com/package/vite-plugin-solid-svg2',
    website: 'https://github.com/yfrans/vite-plugin-solid-svg#readme',
  },
  source: {
    github: 'yfrans/vite-plugin-solid-svg',
    npm: 'vite-plugin-solid-svg2',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
