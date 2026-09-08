import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-image-files2',
  description: 'Like rollup-plugin-image, but writes image files to dest instead of inlining base64.',
  icon: 'logos:rollupjs',
  version: '1.4.6',
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
    npm: 'rollup-plugin-image-files2',
  },
  links: {
    github: 'https://github.com/bspaulding/rollup-plugin-image-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-image-files2',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 3,
    },
  },
})
