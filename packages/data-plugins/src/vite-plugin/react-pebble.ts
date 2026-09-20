import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-pebble',
  description: 'Write Pebble watchfaces and apps in JSX — compiles to piu, Rocky.js, or native C that runs on the watch.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/eddiemoore/react-pebble',
    npm: 'https://www.npmjs.com/package/react-pebble',
    website: 'https://github.com/eddiemoore/react-pebble#readme',
  },
  source: {
    github: 'eddiemoore/react-pebble',
    npm: 'react-pebble',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 57,
      weekly: 6,
    },
  },
})
