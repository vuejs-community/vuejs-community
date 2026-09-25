import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@beastjs/devtools',
  description: 'In-page devtools for Beast (BTSX) and Octane apps on Vite, Rspack and Rsbuild: live component state, BTSX → TSRX inspection, and automatic component extraction for deeply nested templates.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'beast',
    'btsx',
    'tsrx',
    'octane',
    'devtools',
    'vite',
    'vite-plugin',
    'rspack',
    'rspack-plugin',
    'rsbuild',
    'rsbuild-plugin',
    'refactor',
  ],
  links: {
    github: 'https://github.com/beastjs/devtools',
    npm: 'https://www.npmjs.com/package/@beastjs/devtools',
    website: 'https://github.com/beastjs/devtools#readme',
  },
  source: {
    github: 'beastjs/devtools',
    npm: '@beastjs/devtools',
  },
})
