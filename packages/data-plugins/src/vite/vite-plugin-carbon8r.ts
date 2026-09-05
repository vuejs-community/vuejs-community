import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-carbon8r',
  description: 'Option/Alt-click any element in the browser to open its source in your editor. Works with React 19 (no reliance on _debugSource).',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'react',
    'react-19',
    'jump-to-source',
    'click-to-source',
    'open-in-editor',
    'devtools',
    'dx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/carboni-rob/carbon8r',
    npm: 'https://www.npmjs.com/package/vite-plugin-carbon8r',
  },
  stats: {
    downloads: {
      monthly: 753,
      weekly: 191,
    },
  },
})
