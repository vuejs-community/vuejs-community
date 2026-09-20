import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-externalize-dependencies',
  description: 'A simplified plugin for Vite that allows you to exclude specific dependencies from the Vite bundle during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'externalize-dependencies',
    'bundle-exclusion',
    'import-maps',
    'webpack-externals',
    'rollup-externals',
    'dependency-management',
  ],
  links: {
    github: 'https://github.com/MilanKovacic/vite-plugin-externalize-dependencies',
    npm: 'https://www.npmjs.com/package/vite-plugin-externalize-dependencies',
    website: 'https://github.com/MilanKovacic/vite-plugin-externalize-dependencies#readme',
  },
  source: {
    github: 'MilanKovacic/vite-plugin-externalize-dependencies',
    npm: 'vite-plugin-externalize-dependencies',
  },
  stats: {
    stars: 60,
    downloads: {
      monthly: 43506,
      weekly: 7777,
    },
  },
})
