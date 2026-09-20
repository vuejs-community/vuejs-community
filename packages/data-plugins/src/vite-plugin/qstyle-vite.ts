import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@qstyle/vite',
  description: 'Vite plugin that compiles Qwik styles into optimized CSS assets.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'qstyle',
    'qwik',
    'css',
    'vite-plugin',
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/gw31415/qstyle',
    npm: 'https://www.npmjs.com/package/@qstyle/vite',
    website: 'https://github.com/gw31415/qstyle#readme',
  },
  source: {
    github: 'gw31415/qstyle',
    npm: '@qstyle/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 5,
    },
  },
})
