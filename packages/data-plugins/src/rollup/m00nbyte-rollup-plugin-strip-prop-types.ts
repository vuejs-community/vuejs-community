import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@m00nbyte/rollup-plugin-strip-prop-types',
  description: 'Removes propTypes, defaultProps, and prop-types imports, with TypeScript support and custom import paths',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'rollup-plugin',
    'strip',
    'prop-types',
    'proptypes',
    'typescript',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/m00nbyte/rollup-plugin-strip-prop-types',
    npm: 'https://www.npmjs.com/package/@m00nbyte/rollup-plugin-strip-prop-types',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 13,
    },
  },
})
