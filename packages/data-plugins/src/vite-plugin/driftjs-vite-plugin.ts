import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'driftjs-vite-plugin',
  description: 'Vite plugin for build-time compilation of DriftJS Single File Components (.drift) into executable ESM bytecode modules.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'driftjs',
    'vite',
    'vite-plugin',
    'plugin',
    'sfc',
    'compiler',
    'build-tool',
  ],
  source: {
    npm: 'driftjs-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/driftjs-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2103,
      weekly: 24,
    },
  },
})
