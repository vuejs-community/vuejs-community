import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devtools-anywhere/vite-plugin',
  description: 'Vite plugin that injects devtools-anywhere in development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chrome-devtools',
    'debugging',
    'devtools',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jerrychan7/devtools',
    npm: 'https://www.npmjs.com/package/@devtools-anywhere/vite-plugin',
    website: 'https://github.com/jerrychan7/devtools#readme',
  },
  source: {
    github: 'jerrychan7/devtools',
    npm: '@devtools-anywhere/vite-plugin',
  },
})
