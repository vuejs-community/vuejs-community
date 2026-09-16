import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rollup-extras/plugin-binify',
  description: 'plugin to create cli packages during rollup build',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    '@rollup-extras',
    'rollup-plugin',
    'binify',
  ],
  source: {
    github: 'kshutkin/rollup-extras',
    npm: '@rollup-extras/plugin-binify',
  },
  links: {
    github: 'https://github.com/kshutkin/rollup-extras',
    npm: 'https://www.npmjs.com/package/@rollup-extras/plugin-binify',
    website: 'https://github.com/kshutkin/rollup-extras/blob/main/plugin-binify/README.md',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 96,
      weekly: 11,
    },
  },
})
