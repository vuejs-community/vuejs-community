import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-svg-reactive-loader',
  description: 'Vite 2.x plugin, loads SVG files as Vue components, and automatically adds the viewBox attribute to the svg, so that the svg can be adaptively zoomed.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-vue',
    'svg-loader',
  ],
  links: {
    github: 'https://github.com/LiuWenXing1996/vite-plugin-vue-svg-reactive-loader',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-svg-reactive-loader',
    website: 'https://github.com/LiuWenXing1996/vite-plugin-vue-svg-reactive-loader#readme',
  },
  source: {
    github: 'LiuWenXing1996/vite-plugin-vue-svg-reactive-loader',
    npm: 'vite-plugin-vue-svg-reactive-loader',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 1,
    },
  },
})
