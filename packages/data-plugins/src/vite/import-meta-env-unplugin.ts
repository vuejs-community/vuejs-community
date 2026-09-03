import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@import-meta-env/unplugin',
  description: 'Build once, deploy anywhere. Startup/runtime environment variable solution for JavaScript.',
  version: '0.6.3',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup-plugin',
    'vite-plugin',
    'webpack-plugin',
    'twelve-factor',
    'dotenv',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/runtime-env/import-meta-env',
    npm: 'https://www.npmjs.com/package/@import-meta-env/unplugin',
  },
  stats: {
    downloads: {
      monthly: 149388,
      weekly: 39537,
    },
  },
})
