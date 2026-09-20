import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-yamlx',
  description: ' An enhanced Rollup/Vite plugin which converts YAML files to ES6 modules.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'yaml',
  ],
  links: {
    github: 'https://github.com/unbyte/rollup-plugin-yamlx',
    npm: 'https://www.npmjs.com/package/rollup-plugin-yamlx',
    website: 'https://github.com/unbyte/rollup-plugin-yamlx',
  },
  source: {
    github: 'unbyte/rollup-plugin-yamlx',
    npm: 'rollup-plugin-yamlx',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 7,
    },
  },
})
