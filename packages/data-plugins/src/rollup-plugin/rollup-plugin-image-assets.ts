import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-image-assets',
  description: 'Like rollup-plugin-image, but copy image files to dest instead of inlining base64.',
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
    github: 'dongyuwei/rollup-plugin-images',
    npm: 'rollup-plugin-image-assets',
  },
  links: {
    github: 'https://github.com/dongyuwei/rollup-plugin-images',
    npm: 'https://www.npmjs.com/package/rollup-plugin-image-assets',
    website: 'https://github.com/dongyuwei/rollup-plugin-images#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 587,
      weekly: 43,
    },
  },
})
