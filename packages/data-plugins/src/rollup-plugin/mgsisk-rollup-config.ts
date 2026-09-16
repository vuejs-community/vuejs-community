import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mgsisk/rollup-config',
  description: 'Opinionated configuration for Rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-config',
    'rollup-plugin',
  ],
  source: {
    github: 'mgsisk/rollup-config',
    npm: '@mgsisk/rollup-config',
  },
  links: {
    github: 'https://github.com/mgsisk/rollup-config',
    npm: 'https://www.npmjs.com/package/@mgsisk/rollup-config',
    website: 'https://github.com/mgsisk/rollup-config',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
