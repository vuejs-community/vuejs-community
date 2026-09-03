import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@amojs.dev/vite',
  description: 'Vite plugin for AmoJS — compiles html`` templates during a normal Vite build, so bundling, tree-shaking and code-splitting are Vite\'s job.',
  version: '0.9.0',
  category: 'plugin',
  tags: [
    'amojs',
    'vite',
    'vite-plugin',
    'compiler',
    'signals',
    'ssr',
    'ssg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/amojs-dev/amojs',
    npm: 'https://www.npmjs.com/package/@amojs.dev/vite',
  },
  stats: {
    downloads: {
      monthly: 136,
      weekly: 7,
    },
  },
})
