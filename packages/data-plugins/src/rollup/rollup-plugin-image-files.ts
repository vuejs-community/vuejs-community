import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-image-files',
  description: 'Like rollup-plugin-image, but writes image files to dest instead of inlining base64.',
  icon: 'logos:rollupjs',
  version: '1.4.2',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'image',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'bspaulding/rollup-plugin-image-files',
    npm: 'rollup-plugin-image-files',
  },
  links: {
    github: 'https://github.com/bspaulding/rollup-plugin-image-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-image-files',
  },
  stats: {
    downloads: {
      monthly: 4616,
      weekly: 1715,
    },
  },
})
