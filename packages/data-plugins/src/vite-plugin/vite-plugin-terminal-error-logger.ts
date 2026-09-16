import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-terminal-error-logger',
  description: 'A universal Vite plugin to log browser runtime errors to the Vite terminal with sourcemap and Error Overlay support.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'error-logger',
    'terminal',
    'sourcemap',
    'overlay',
  ],
  source: {
    npm: 'vite-plugin-terminal-error-logger',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-terminal-error-logger',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 7,
    },
  },
})
