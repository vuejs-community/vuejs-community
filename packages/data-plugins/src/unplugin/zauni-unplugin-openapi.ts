import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zauni/unplugin-openapi',
  description: 'A bundler agnostic plugin which converts OpenAPI 3.0, 3.1 and Swagger files to ESM modules.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'rollup',
    'rolldown',
    'vite',
    'openapi',
    'swagger',
    'yaml',
    'webpack',
    'rspack',
    'esbuild',
    'plugin',
    'astro',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/zauni/unplugin-openapi',
    npm: 'https://www.npmjs.com/package/@zauni/unplugin-openapi',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 5,
    },
  },
})
