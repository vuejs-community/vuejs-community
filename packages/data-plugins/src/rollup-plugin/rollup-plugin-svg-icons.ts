import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svg-icons',
  description: 'Bundles all svg icons from the speciefed folder to the single spritesheet svg file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'svg',
    'icons',
    'sprite',
  ],
  source: {
    github: 'AlexxNB/rollup-plugin-svg-icons',
    npm: 'rollup-plugin-svg-icons',
  },
  links: {
    github: 'https://github.com/AlexxNB/rollup-plugin-svg-icons',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svg-icons',
    website: 'https://github.com/AlexxNB/rollup-plugin-svg-icons#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 10939,
      weekly: 2338,
    },
  },
})
