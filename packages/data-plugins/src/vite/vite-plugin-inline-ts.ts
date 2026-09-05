import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inline-ts',
  description: 'A Vite plugin to process TypeScript code inside <script lang="ts"> tags.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'compile',
    'transpile',
    'typescript',
    'embeded',
    'inline',
    'html',
    'templates',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/re7r/vite-plugin-inline-ts',
    npm: 'https://www.npmjs.com/package/vite-plugin-inline-ts',
  },
  stats: {
    downloads: {
      monthly: 43,
      weekly: 20,
    },
  },
})
