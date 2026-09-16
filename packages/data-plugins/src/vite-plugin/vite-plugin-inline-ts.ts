import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inline-ts',
  description: 'A Vite plugin to process TypeScript code inside <script lang="ts"> tags.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 're7r/vite-plugin-inline-ts',
    npm: 'vite-plugin-inline-ts',
  },
  links: {
    github: 'https://github.com/re7r/vite-plugin-inline-ts',
    npm: 'https://www.npmjs.com/package/vite-plugin-inline-ts',
    website: 'https://github.com/re7r/vite-plugin-inline-ts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 1,
    },
  },
})
