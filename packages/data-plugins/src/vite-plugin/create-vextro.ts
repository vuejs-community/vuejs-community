import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'create-vextro',
  description: 'Scaffold modern browser extensions (Chrome, Edge, Firefox) with Vite + React + Tailwind',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'chrome-extension',
    'firefox-extension',
    'browser-extension',
    'vite-plugin',
    'react',
    'tailwind',
    'crxjs',
    'manifest-v3',
    'scaffold',
    'cli',
    'generator',
    'starter-kit',
  ],
  source: {
    github: 'CodeCanvasCollective/vextro',
    npm: 'create-vextro',
  },
  links: {
    github: 'https://github.com/CodeCanvasCollective/vextro',
    npm: 'https://www.npmjs.com/package/create-vextro',
    website: 'https://github.com/CodeCanvasCollective/vextro#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 28,
      weekly: 4,
    },
  },
})
