import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@minna-ui/rollup-plugins',
  description: 'Rollup plugins for use in minna-ui projects.',
  version: '0.21.0',
  category: 'plugin',
  tags: [
    'css',
    'minna-ui',
    'postcss',
    'postcss-runner',
    'purgecss',
    'rollup',
    'rollup-plugin',
    'svelte',
    'wearegenki',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/WeAreGenki/minna-ui',
    npm: 'https://www.npmjs.com/package/@minna-ui/rollup-plugins',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 11,
    },
  },
})
