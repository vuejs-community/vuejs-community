import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-icons-ssr',
  description: 'Vite Plugin for fast creating SVG sprites.',
  icon: 'logos:vite-icon',
  version: '1.9.19',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'svgo',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'lip8up/vite-plugin-svg-icons-ssr',
    npm: 'vite-plugin-svg-icons-ssr',
  },
  links: {
    github: 'https://github.com/lip8up/vite-plugin-svg-icons-ssr',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-icons-ssr',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
