import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@triggery/vite',
  description: 'Vite plugin for Triggery — auto-imports every *.trigger.ts via a virtual module + HMR. Framework-agnostic (works alongside React, Solid, Vue).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'triggery',
    'vite-plugin',
    'auto-discovery',
    'virtual-module',
    'hmr',
  ],
  source: {
    github: 'triggeryjs/triggery',
    npm: '@triggery/vite',
  },
  links: {
    github: 'https://github.com/triggeryjs/triggery',
    npm: 'https://www.npmjs.com/package/@triggery/vite',
    website: 'https://triggeryjs.github.io',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 34,
      weekly: 1,
    },
  },
})
