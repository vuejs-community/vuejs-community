import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@duckalization/bundler-plugin',
  description: 'Build-time ID injection for duckalization: pre-bakes content-derived IDs into __() calls so no hashing ships to the client.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/soska/duckalization',
    npm: 'https://www.npmjs.com/package/@duckalization/bundler-plugin',
    website: 'https://github.com/soska/duckalization#readme',
  },
  source: {
    github: 'soska/duckalization',
    npm: '@duckalization/bundler-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 155,
      weekly: 48,
    },
  },
})
