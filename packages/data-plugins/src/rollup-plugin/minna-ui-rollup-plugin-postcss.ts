import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minna-ui/rollup-plugin-postcss',
  description: 'PostCSS runner rollup plugin for use in Minna UI projects.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'css',
    'minna-ui',
    'postcss',
    'postcss-runner',
    'rollup',
    'rollup-plugin',
    'wearegenki',
  ],
  links: {
    github: 'https://github.com/WeAreGenki/minna-ui',
    npm: 'https://www.npmjs.com/package/@minna-ui/rollup-plugin-postcss',
    website: 'https://wearegenki.github.io/minna-ui',
  },
  source: {
    github: 'WeAreGenki/minna-ui',
    npm: '@minna-ui/rollup-plugin-postcss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 144,
      weekly: 24,
    },
  },
})
