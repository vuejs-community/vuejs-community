import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minna-ui/rollup-plugin-purgecss',
  description: 'Remove unused styles using Purgecss in rollup for use in Minna UI projects.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'css',
    'minna-ui',
    'purgecss',
    'rollup',
    'rollup-plugin',
    'wearegenki',
  ],
  source: {
    github: 'WeAreGenki/minna-ui',
    npm: '@minna-ui/rollup-plugin-purgecss',
  },
  links: {
    github: 'https://github.com/WeAreGenki/minna-ui',
    npm: 'https://www.npmjs.com/package/@minna-ui/rollup-plugin-purgecss',
    website: 'https://wearegenki.github.io/minna-ui',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 141,
      weekly: 24,
    },
  },
})
