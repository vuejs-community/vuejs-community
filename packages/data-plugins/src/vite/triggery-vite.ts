import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@triggery/vite',
  description: 'Vite plugin for Triggery — auto-imports every *.trigger.ts via a virtual module + HMR. Framework-agnostic (works alongside React, Solid, Vue).',
  version: '0.10.0',
  category: 'plugin',
  tags: [
    'triggery',
    'vite-plugin',
    'auto-discovery',
    'virtual-module',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/triggeryjs/triggery',
    npm: 'https://www.npmjs.com/package/@triggery/vite',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 12,
    },
  },
})
