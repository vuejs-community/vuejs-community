import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-openapi',
  description: 'A Rollup and Vite plugin which converts OpenAPI YAML files to ES6 modules.',
  icon: 'logos:rollupjs',
  version: '3.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'vite',
    'plugin',
    'rollup-plugin',
    'vite-plugin',
    'openapi',
    'swagger',
    'yaml',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'zauni/rollup-plugin-openapi',
    npm: 'rollup-plugin-openapi',
  },
  links: {
    github: 'https://github.com/zauni/rollup-plugin-openapi',
    npm: 'https://www.npmjs.com/package/rollup-plugin-openapi',
  },
  stats: {
    downloads: {
      monthly: 511,
      weekly: 101,
    },
  },
})
