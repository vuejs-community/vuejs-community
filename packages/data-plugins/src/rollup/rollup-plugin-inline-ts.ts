import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-ts',
  description: 'A Rollup plugin to process TypeScript code inside <script lang="ts"> tags.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'compile',
    'transpile',
    'typescript',
    'embeded',
    'inline',
    'html',
    'templates',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/re7r/rollup-plugin-inline-ts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-ts',
  },
  stats: {
    downloads: {
      monthly: 108,
      weekly: 19,
    },
  },
})
