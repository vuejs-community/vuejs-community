import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@proyecta-ai/vite',
  description: 'Vite plugin for Proyecta applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'proyecta',
    'vite',
    'vite-plugin',
    'react',
    'component-tagger',
  ],
  links: {
    github: 'https://github.com/nicepkg/proyecta',
    npm: 'https://www.npmjs.com/package/@proyecta-ai/vite',
    website: 'https://proyecta.dev',
  },
  source: {
    github: 'nicepkg/proyecta',
    npm: '@proyecta-ai/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1688,
      weekly: 231,
    },
  },
})
