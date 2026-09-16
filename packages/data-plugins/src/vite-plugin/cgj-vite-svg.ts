import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cgj-vite-svg',
  description: 'Vite Plugin for fast creating SVG sprites.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'svgo',
    'vben',
  ],
  source: {
    github: 'anncwb/vite-plugin-svg-icons',
    npm: 'cgj-vite-svg',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-svg-icons',
    npm: 'https://www.npmjs.com/package/cgj-vite-svg',
    website: 'https://github.com/anncwb/vite-plugin-svg-icons/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
