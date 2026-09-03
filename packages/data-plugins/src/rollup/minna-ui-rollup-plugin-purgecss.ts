import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@minna-ui/rollup-plugin-purgecss',
  description: 'Remove unused styles using Purgecss in rollup for use in Minna UI projects.',
  version: '0.36.0',
  category: 'plugin',
  tags: [
    'css',
    'minna-ui',
    'purgecss',
    'rollup',
    'rollup-plugin',
    'wearegenki',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/WeAreGenki/minna-ui',
    npm: 'https://www.npmjs.com/package/@minna-ui/rollup-plugin-purgecss',
  },
  stats: {
    downloads: {
      monthly: 138,
      weekly: 51,
    },
  },
})
