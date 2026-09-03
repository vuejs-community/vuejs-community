import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@codexo/exojs-build',
  description: 'Build-time Vite/Rollup plugins that load ExoJS shader files and inline typed AudioWorklet and Web Worker TypeScript modules as source strings.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'audioworklet',
    'glsl',
    'rollup-plugin',
    'vite-plugin',
    'web-worker',
    'wgsl',
    'worklet',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Exoridus/ExoJS',
    npm: 'https://www.npmjs.com/package/@codexo/exojs-build',
  },
  stats: {
    downloads: {
      monthly: 109,
      weekly: 13,
    },
  },
})
