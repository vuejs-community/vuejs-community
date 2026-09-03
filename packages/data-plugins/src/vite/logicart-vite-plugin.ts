import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'logicart-vite-plugin',
  description: 'Vite plugin for LogicArt build-time code instrumentation and flowchart generation',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'logicart',
    'flowchart',
    'visualization',
    'debugging',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/logicart/logicart-vite-plugin',
    npm: 'https://www.npmjs.com/package/logicart-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
