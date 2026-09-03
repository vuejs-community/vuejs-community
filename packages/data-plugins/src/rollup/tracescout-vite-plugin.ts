import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tracescout/vite-plugin',
  description: 'TraceScout Vite/Rollup plugin — per-chunk debug-ID injection and private source-map upload for stack-trace symbolication.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'tracescout',
    'vite-plugin',
    'rollup-plugin',
    'source-maps',
    'debug-id',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/Hananc86/TraceScout-SDK',
    npm: 'https://www.npmjs.com/package/@tracescout/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 387,
      weekly: 17,
    },
  },
})
