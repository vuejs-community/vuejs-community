import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'logicart-vite-plugin',
  description: 'Vite plugin for LogicArt build-time code instrumentation and flowchart generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'logicart',
    'flowchart',
    'visualization',
    'debugging',
  ],
  links: {
    github: 'https://github.com/logicart/logicart-vite-plugin',
    npm: 'https://www.npmjs.com/package/logicart-vite-plugin',
    website: 'https://github.com/logicart/logicart-vite-plugin#readme',
  },
  source: {
    github: 'logicart/logicart-vite-plugin',
    npm: 'logicart-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
