import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sprite-components-solid',
  description: 'Create svg sprite sheets from imported svg files and get usable Solid.js components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'svg',
    'sprites',
  ],
  source: {
    github: 'knpwrs/vite-plugin-svg-sprite-components',
    npm: 'vite-plugin-svg-sprite-components-solid',
  },
  links: {
    github: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sprite-components-solid',
    website: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
