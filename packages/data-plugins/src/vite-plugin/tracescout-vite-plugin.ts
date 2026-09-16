import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tracescout/vite-plugin',
  description: 'TraceScout Vite/Rollup plugin — per-chunk debug-ID injection and private source-map upload for stack-trace symbolication.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tracescout',
    'vite-plugin',
    'rollup-plugin',
    'source-maps',
    'debug-id',
  ],
  source: {
    github: 'Hananc86/TraceScout-SDK',
    npm: '@tracescout/vite-plugin',
  },
  links: {
    github: 'https://github.com/Hananc86/TraceScout-SDK',
    npm: 'https://www.npmjs.com/package/@tracescout/vite-plugin',
    website: 'https://docs.tracescout.com/docs/guides/source-maps',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 7,
    },
  },
})
