import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'semantic-inspector',
  description: 'Dev-only React inspector: a hotkey highlights elements and click-copies their `Component — file:line` (or a PNG screenshot) for fast context handoff to AI coding assistants.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'react',
    'vite',
    'vite-plugin',
    'babel',
    'babel-plugin',
    'devtools',
    'inspector',
    'jsx',
    'source-location',
    'data-loc',
    'vibe-coding',
    'ai',
    'screenshot',
    'clipboard',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ghost-vk/semantic-inspector',
    npm: 'https://www.npmjs.com/package/semantic-inspector',
  },
  stats: {
    downloads: {
      monthly: 960,
      weekly: 503,
    },
  },
})
