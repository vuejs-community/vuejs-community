import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-memory-leak-detector',
  description: 'A Vite plugin to detect potential memory leaks in frontend code at build time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'memory-leak',
    'static-analysis',
    'performance',
    'ast',
    'oxc',
    'react',
    'vue',
    'svelte',
    'solid',
  ],
  links: {
    github: 'https://github.com/unknownman/vite-plugin-memory-leak-detector',
    npm: 'https://www.npmjs.com/package/vite-plugin-memory-leak-detector',
    website: 'https://github.com/unknownman/vite-plugin-memory-leak-detector#readme',
  },
  source: {
    github: 'unknownman/vite-plugin-memory-leak-detector',
    npm: 'vite-plugin-memory-leak-detector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 132,
      weekly: 132,
    },
  },
})
