import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup/plugin-image',
  description: 'Import JPG, PNG, GIF, SVG, and WebP files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'plugin',
    'images',
    'modules',
  ],
  source: {
    github: 'rollup/plugins',
    npm: '@rollup/plugin-image',
  },
  links: {
    github: 'https://github.com/rollup/plugins',
    npm: 'https://www.npmjs.com/package/@rollup/plugin-image',
    website: 'https://github.com/rollup/plugins/tree/master/packages/image/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6610722,
      weekly: 1281662,
    },
  },
})
