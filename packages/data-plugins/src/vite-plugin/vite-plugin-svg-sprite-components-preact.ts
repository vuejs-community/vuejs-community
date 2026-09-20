import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sprite-components-preact',
  description: 'Create svg sprite sheets from imported svg files and get usable Preact components.',
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
  links: {
    github: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sprite-components-preact',
    website: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components/',
  },
  source: {
    github: 'knpwrs/vite-plugin-svg-sprite-components',
    npm: 'vite-plugin-svg-sprite-components-preact',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
