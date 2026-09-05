import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-svg-reactive-loader',
  description: 'Vite 2.x plugin, loads SVG files as Vue components, and automatically adds the viewBox attribute to the svg, so that the svg can be adaptively zoomed.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-vue',
    'svg-loader',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/LiuWenXing1996/vite-plugin-vue-svg-reactive-loader',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-svg-reactive-loader',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 7,
    },
  },
})
