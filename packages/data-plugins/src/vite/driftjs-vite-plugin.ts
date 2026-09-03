import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'driftjs-vite-plugin',
  description: 'Vite plugin for build-time compilation of DriftJS Single File Components (.drift) into executable ESM bytecode modules.',
  version: '0.0.13',
  category: 'plugin',
  tags: [
    'driftjs',
    'vite',
    'vite-plugin',
    'plugin',
    'sfc',
    'compiler',
    'build-tool',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/driftjs-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 1579,
      weekly: 547,
    },
  },
})
