import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-image-assets',
  description: 'Like rollup-plugin-image, but copy image files to dest instead of inlining base64.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'image',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dongyuwei/rollup-plugin-images',
    npm: 'https://www.npmjs.com/package/rollup-plugin-image-assets',
  },
  stats: {
    downloads: {
      monthly: 761,
      weekly: 181,
    },
  },
})
