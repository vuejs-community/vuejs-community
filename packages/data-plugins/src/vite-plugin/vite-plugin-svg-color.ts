import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-color',
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
    npm: 'vite-plugin-svg-color',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-svg-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-color',
    website: 'https://github.com/anncwb/vite-plugin-svg-icons/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
