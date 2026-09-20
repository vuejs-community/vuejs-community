import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zauni/unplugin-openapi',
  description: 'A bundler agnostic plugin which converts OpenAPI 3.0, 3.1 and Swagger files to ESM modules.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
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
  links: {
    github: 'https://github.com/zauni/unplugin-openapi',
    npm: 'https://www.npmjs.com/package/@zauni/unplugin-openapi',
    website: 'https://github.com/zauni/unplugin-openapi#readme',
  },
  source: {
    github: 'zauni/unplugin-openapi',
    npm: '@zauni/unplugin-openapi',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
