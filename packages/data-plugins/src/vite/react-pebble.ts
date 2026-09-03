import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-pebble',
  description: 'Write Pebble watchfaces and apps in JSX — compiles to piu, Rocky.js, or native C that runs on the watch.',
  version: '0.9.0',
  category: 'plugin',
  tags: [
    'pebble',
    'smartwatch',
    'watchface',
    'piu',
    'moddable',
    'alloy',
    'jsx',
    'preact',
    'compiler',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eddiemoore/react-pebble',
    npm: 'https://www.npmjs.com/package/react-pebble',
  },
  stats: {
    downloads: {
      monthly: 104,
      weekly: 15,
    },
  },
})
