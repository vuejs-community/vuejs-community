import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mcansh/vite-plugin-svg-sprite',
  description: 'Vite plugin that combines imported SVGs into a single optimized sprite sheet, with each import resolving to a <use href>-ready symbol URL.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'icons',
    'sprite',
    'svg',
    'svg-sprite',
    'vite',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@mcansh/vite-plugin-svg-sprite',
    website: 'https://github.com/mcansh/vite-plugin-svg-sprite#readme',
  },
  source: {
    npm: '@mcansh/vite-plugin-svg-sprite',
  },
})
