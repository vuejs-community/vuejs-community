import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@xstate-devtools/vite-plugin',
  description: 'Vite plugin that injects source locations into XState createMachine/state definitions so the XState DevTools can link straight to your editor.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'xstate',
    'vite',
    'vite-plugin',
    'statechart',
    'devtools',
  ],
  source: {
    github: 'mjbeswick/xstate-devtools',
    npm: '@xstate-devtools/vite-plugin',
  },
  links: {
    github: 'https://github.com/mjbeswick/xstate-devtools',
    npm: 'https://www.npmjs.com/package/@xstate-devtools/vite-plugin',
    website: 'https://github.com/mjbeswick/xstate-devtools#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 23,
      weekly: 4,
    },
  },
})
