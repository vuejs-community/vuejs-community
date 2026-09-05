import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-terminal-error-logger',
  description: 'A universal Vite plugin to log browser runtime errors to the Vite terminal with sourcemap and Error Overlay support.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'error-logger',
    'terminal',
    'sourcemap',
    'overlay',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-terminal-error-logger',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
