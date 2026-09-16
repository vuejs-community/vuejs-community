import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sprite-components-react',
  description: 'Create svg sprite sheets from imported svg files and get usable React components.',
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
    npm: 'vite-plugin-svg-sprite-components-react',
  },
  links: {
    github: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sprite-components-react',
    website: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
