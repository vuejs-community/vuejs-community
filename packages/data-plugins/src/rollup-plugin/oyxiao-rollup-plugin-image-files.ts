import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@oyxiao/rollup-plugin-image-files',
  description: 'Like rollup-plugin-image, but writes image files to dest instead of inlining base64.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'image',
  ],
  source: {
    github: 'bspaulding/rollup-plugin-image-files',
    npm: '@oyxiao/rollup-plugin-image-files',
  },
  links: {
    github: 'https://github.com/bspaulding/rollup-plugin-image-files',
    npm: 'https://www.npmjs.com/package/@oyxiao/rollup-plugin-image-files',
    website: 'https://github.com/bspaulding/rollup-plugin-image-files#readme',
  },
  stats: {
    stars: 26,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
