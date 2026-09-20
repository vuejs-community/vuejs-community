import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@codexo/exojs-build',
  description: 'Build-time Vite/Rollup plugins that load ExoJS shader files and inline typed AudioWorklet and Web Worker TypeScript modules as source strings.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'audioworklet',
    'glsl',
    'rollup-plugin',
    'vite-plugin',
    'web-worker',
    'wgsl',
    'worklet',
  ],
  links: {
    github: 'https://github.com/Exoridus/ExoJS',
    npm: 'https://www.npmjs.com/package/@codexo/exojs-build',
    website: 'https://github.com/Exoridus/ExoJS',
  },
  source: {
    github: 'Exoridus/ExoJS',
    npm: '@codexo/exojs-build',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 122,
      weekly: 5,
    },
  },
})
