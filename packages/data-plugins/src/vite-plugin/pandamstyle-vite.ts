import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pandamstyle/vite',
  description: 'Vite host adapter for the PandamStyle Project Service.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lbframe/pandam-style',
    npm: 'https://www.npmjs.com/package/@pandamstyle/vite',
    website: 'https://github.com/lbframe/pandam-style#readme',
  },
  source: {
    github: 'lbframe/pandam-style',
    npm: '@pandamstyle/vite',
  },
})
