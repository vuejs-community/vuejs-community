import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'semantic-inspector',
  description: 'Dev-only React inspector: a hotkey highlights elements and click-copies their `Component — file:line` (or a PNG screenshot) for fast context handoff to AI coding assistants.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/ghost-vk/semantic-inspector',
    npm: 'https://www.npmjs.com/package/semantic-inspector',
    website: 'https://github.com/ghost-vk/semantic-inspector#readme',
  },
  source: {
    github: 'ghost-vk/semantic-inspector',
    npm: 'semantic-inspector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1006,
      weekly: 61,
    },
  },
})
