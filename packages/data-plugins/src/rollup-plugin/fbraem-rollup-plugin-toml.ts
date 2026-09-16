import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fbraem/rollup-plugin-toml',
  description: 'Rollup Plugin for TOML',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'toml',
  ],
  source: {
    github: 'fbraem/rollup-plugin-toml',
    npm: '@fbraem/rollup-plugin-toml',
  },
  links: {
    github: 'https://github.com/fbraem/rollup-plugin-toml',
    npm: 'https://www.npmjs.com/package/@fbraem/rollup-plugin-toml',
    website: 'https://github.com/fbraem/rollup-plugin-toml#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 32,
      weekly: 3,
    },
  },
})
