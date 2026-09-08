import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-terminal-error-logger',
  description: 'A universal Vite plugin to log browser runtime errors to the Vite terminal with sourcemap and Error Overlay support.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-terminal-error-logger',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-terminal-error-logger',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
