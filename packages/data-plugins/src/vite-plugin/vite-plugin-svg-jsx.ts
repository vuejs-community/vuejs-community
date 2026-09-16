import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-jsx',
  description: 'Import SVG files as JSX components',
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
  ],
  source: {
    github: 'mrfoxpro/vite-plugin-svg-jsx',
    npm: 'vite-plugin-svg-jsx',
  },
  links: {
    github: 'https://github.com/mrfoxpro/vite-plugin-svg-jsx',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-jsx',
    website: 'https://github.com/mrfoxpro/vite-plugin-svg-jsx#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
