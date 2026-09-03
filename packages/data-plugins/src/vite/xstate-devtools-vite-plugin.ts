import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@xstate-devtools/vite-plugin',
  description: 'Vite plugin that injects source locations into XState createMachine/state definitions so the XState DevTools can link straight to your editor.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'xstate',
    'vite',
    'vite-plugin',
    'statechart',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mjbeswick/xstate-devtools',
    npm: 'https://www.npmjs.com/package/@xstate-devtools/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
