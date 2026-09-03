import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-blacklist',
  description: 'rollup-plugin-blacklist is a rollup plugin that will prevent files matching a given pattern from being accidentally included in a bundle.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/dumbmatter/rollup-plugin-blacklist',
    npm: 'https://www.npmjs.com/package/rollup-plugin-blacklist',
  },
  stats: {
    downloads: {
      monthly: 138,
      weekly: 41,
    },
  },
})
