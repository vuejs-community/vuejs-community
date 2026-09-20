import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-inline-ts',
  description: 'A Rollup plugin to process TypeScript code inside <script lang="ts"> tags.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/re7r/rollup-plugin-inline-ts',
    npm: 'https://www.npmjs.com/package/rollup-plugin-inline-ts',
    website: 'https://github.com/re7r/rollup-plugin-inline-ts#readme',
  },
  source: {
    github: 're7r/rollup-plugin-inline-ts',
    npm: 'rollup-plugin-inline-ts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 75,
      weekly: 25,
    },
  },
})
