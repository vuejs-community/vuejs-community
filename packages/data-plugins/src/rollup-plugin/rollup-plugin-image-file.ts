import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-image-file',
  description: 'fork form rollup-plugin-image-files, and add some features',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'image',
  ],
  links: {
    github: 'https://github.com/bspaulding/rollup-plugin-image-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-image-file',
    website: 'https://github.com/biorz/rollup-plugin-image-files#readme',
  },
  source: {
    github: 'bspaulding/rollup-plugin-image-files',
    npm: 'rollup-plugin-image-file',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3523,
      weekly: 635,
    },
  },
})
