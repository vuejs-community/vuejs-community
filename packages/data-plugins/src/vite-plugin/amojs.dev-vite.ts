import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@amojs.dev/vite',
  description: 'Vite plugin for AmoJS — compiles html`` templates during a normal Vite build, so bundling, tree-shaking and code-splitting are Vite\'s job.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'amojs',
    'vite',
    'vite-plugin',
    'compiler',
    'signals',
    'ssr',
    'ssg',
  ],
  source: {
    github: 'amojs-dev/amojs',
    npm: '@amojs.dev/vite',
  },
  links: {
    github: 'https://github.com/amojs-dev/amojs',
    npm: 'https://www.npmjs.com/package/@amojs.dev/vite',
    website: 'https://amojs.dev',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 44,
      weekly: 7,
    },
  },
})
