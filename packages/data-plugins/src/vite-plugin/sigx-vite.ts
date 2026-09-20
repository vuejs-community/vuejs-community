import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sigx/vite',
  description: 'Vite plugin for SignalX Framework with HMR, library builds, and automatic type generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sigx',
    'signalx',
    'vite',
    'vite-plugin',
    'jsx',
    'tsx',
    'hmr',
    'ssr',
    'server-functions',
    'signals',
    'framework',
  ],
  links: {
    github: 'https://github.com/signalxjs/core',
    npm: 'https://www.npmjs.com/package/@sigx/vite',
    website: 'https://sigx.dev/vite/',
  },
  source: {
    github: 'signalxjs/core',
    npm: '@sigx/vite',
  },
})
