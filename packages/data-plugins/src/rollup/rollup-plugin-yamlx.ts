import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-yamlx',
  description: ' An enhanced Rollup/Vite plugin which converts YAML files to ES6 modules.',
  icon: 'logos:rollupjs',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'yaml',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'unbyte/rollup-plugin-yamlx',
    npm: 'rollup-plugin-yamlx',
  },
  links: {
    github: 'https://github.com/unbyte/rollup-plugin-yamlx',
    npm: 'https://www.npmjs.com/package/rollup-plugin-yamlx',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
