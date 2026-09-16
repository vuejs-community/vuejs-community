import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minna-ui/rollup-plugin-dev-server',
  description: 'Run a live development server as a rollup plugin.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'minna-ui',
    'rollup',
    'rollup-plugin',
    'wearegenki',
  ],
  source: {
    github: 'WeAreGenki/minna-ui',
    npm: '@minna-ui/rollup-plugin-dev-server',
  },
  links: {
    github: 'https://github.com/WeAreGenki/minna-ui',
    npm: 'https://www.npmjs.com/package/@minna-ui/rollup-plugin-dev-server',
    website: 'https://wearegenki.github.io/minna-ui',
  },
  stats: {
    stars: 87,
    downloads: {
      monthly: 124,
      weekly: 10,
    },
  },
})
