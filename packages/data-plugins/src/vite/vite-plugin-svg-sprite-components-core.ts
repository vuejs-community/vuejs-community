import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-sprite-components-core',
  description: 'Create svg sprite sheets from imported svg files and get usable components for many popular frontend frameworks.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'svg',
    'sprites',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'knpwrs/vite-plugin-svg-sprite-components',
    npm: 'vite-plugin-svg-sprite-components-core',
  },
  links: {
    github: 'https://github.com/knpwrs/vite-plugin-svg-sprite-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-sprite-components-core',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
