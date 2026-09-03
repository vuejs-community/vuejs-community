import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@duckalization/bundler-plugin',
  description: 'Build-time ID injection for duckalization: pre-bakes content-derived IDs into __() calls so no hashing ships to the client.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'duckalization',
    'i18n',
    'localization',
    'translation',
    'unplugin',
    'vite',
    'rollup',
    'webpack',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/soska/duckalization',
    npm: 'https://www.npmjs.com/package/@duckalization/bundler-plugin',
  },
  stats: {
    downloads: {
      monthly: 102,
      weekly: 102,
    },
  },
})
