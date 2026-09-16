import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-image-files2',
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
    npm: 'rollup-plugin-image-files2',
  },
  links: {
    github: 'https://github.com/bspaulding/rollup-plugin-image-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-image-files2',
    website: 'https://github.com/bspaulding/rollup-plugin-image-files#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
