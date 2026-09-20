import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-replace-shebang',
  description: 'A Rollup plugin that preserves and relocates shebang to the output bundle.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'shebang',
    'hashbang',
    'cli',
    'bundler',
  ],
  links: {
    github: 'https://github.com/saqqdy/rollup-plugin-replace-shebang',
    npm: 'https://www.npmjs.com/package/rollup-plugin-replace-shebang',
    website: 'https://github.com/saqqdy/rollup-plugin-replace-shebang#readme',
  },
  source: {
    github: 'saqqdy/rollup-plugin-replace-shebang',
    npm: 'rollup-plugin-replace-shebang',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 4010,
      weekly: 654,
    },
  },
})
