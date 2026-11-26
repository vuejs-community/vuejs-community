import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gridconfig/vite',
  description: 'The old name of gridconfig/vite. Use the gridconfig package.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gridconfig',
    'vite-plugin',
    'css',
    'grid',
    'container-queries',
    'layout',
  ],
  links: {
    github: 'https://github.com/jarred/gridconfig',
    npm: 'https://www.npmjs.com/package/@gridconfig/vite',
    website: 'https://github.com/jarred/gridconfig#readme',
  },
  source: {
    github: 'jarred/gridconfig',
    npm: '@gridconfig/vite',
  },
})
