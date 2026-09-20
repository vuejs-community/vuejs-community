import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brixtol/rollup-config',
  description: 'Shared Rollup configuration interface used within the Brixtol Textiles monorepo.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'config',
    'brixtol',
  ],
  links: {
    github: 'https://github.com/brixtol/rollup-config',
    npm: 'https://www.npmjs.com/package/@brixtol/rollup-config',
    website: 'https://github.com/brixtol/rollup-config',
  },
  source: {
    github: 'brixtol/rollup-config',
    npm: '@brixtol/rollup-config',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 63,
      weekly: 4,
    },
  },
})
