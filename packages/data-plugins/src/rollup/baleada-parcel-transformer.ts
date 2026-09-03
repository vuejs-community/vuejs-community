import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@baleada/parcel-transformer',
  description: 'Parcel plugin that allows you to transform files\' content during your build step.',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'baleada',
    'rollup-plugin',
    'source transform',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/baleada/parcel-transformer',
    npm: 'https://www.npmjs.com/package/@baleada/parcel-transformer',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 12,
    },
  },
})
