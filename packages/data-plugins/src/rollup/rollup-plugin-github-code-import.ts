import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-github-code-import',
  description: 'Rollup plugin that imports code from a GitHub URL',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'markdown',
    'code-block',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/haocheng6/rollup-plugin-github-code-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-github-code-import',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
