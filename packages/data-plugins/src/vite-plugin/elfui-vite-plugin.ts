import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@elfui/vite-plugin',
  description: 'Vite plugin for compiling ElfUI macro components.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'elfui',
    'vite',
    'vite-plugin',
    'macro-components',
    'typescript',
  ],
  source: {
    github: 'bloom-lmh/elfui',
    npm: '@elfui/vite-plugin',
  },
  links: {
    github: 'https://github.com/bloom-lmh/elfui',
    npm: 'https://www.npmjs.com/package/@elfui/vite-plugin',
    website: 'https://github.com/bloom-lmh/elfui/tree/main/packages/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 197,
      weekly: 18,
    },
  },
})
