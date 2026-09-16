import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-solid-svg',
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
  source: {
    github: 'jfgodoy/vite-plugin-solid-svg',
    npm: 'vite-plugin-solid-svg',
  },
  links: {
    github: 'https://github.com/jfgodoy/vite-plugin-solid-svg',
    npm: 'https://www.npmjs.com/package/vite-plugin-solid-svg',
    website: 'https://github.com/jfgodoy/vite-plugin-solid-svg#readme',
  },
  stats: {
    stars: 93,
    downloads: {
      monthly: 76109,
      weekly: 13667,
    },
  },
})
