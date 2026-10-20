import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fetchalo',
  description: 'Vite, webpack and Rspack plugin that loads remote JS, CSS and media through your own fetch, so every request can carry headers (e.g. Authorization) without a service worker.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'fetch',
    'headers',
    'authorization',
    'module-federation',
    'es-module-shims',
    'micro-frontends',
    'webpack',
    'rspack',
  ],
  links: {
    github: 'https://github.com/gioboa/fetchalo',
    npm: 'https://www.npmjs.com/package/fetchalo',
    website: 'https://github.com/gioboa/fetchalo#readme',
  },
  source: {
    github: 'gioboa/fetchalo',
    npm: 'fetchalo',
  },
})
