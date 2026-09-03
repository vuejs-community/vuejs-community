import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oyxiao/rollup-plugin-image-files',
  description: 'Like rollup-plugin-image, but writes image files to dest instead of inlining base64.',
  version: '1.4.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'image',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/bspaulding/rollup-plugin-image-files',
    npm: 'https://www.npmjs.com/package/@oyxiao/rollup-plugin-image-files',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
