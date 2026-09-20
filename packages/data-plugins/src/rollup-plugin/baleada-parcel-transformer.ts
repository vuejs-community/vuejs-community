import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@baleada/parcel-transformer',
  description: 'Parcel plugin that allows you to transform files\' content during your build step.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'baleada',
    'rollup-plugin',
    'source transform',
  ],
  links: {
    github: 'https://github.com/baleada/parcel-transformer',
    npm: 'https://www.npmjs.com/package/@baleada/parcel-transformer',
    website: 'https://baleada.netlify.com',
  },
  source: {
    github: 'baleada/parcel-transformer',
    npm: '@baleada/parcel-transformer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
