import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@devwizard/vite-plugin-enumify',
  description: 'Vite plugin for Laravel Enumify - auto-sync PHP enums to TypeScript',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'enum',
    'typescript',
    'codegen',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DevWizardHQ/vite-plugin-enumify',
    npm: 'https://www.npmjs.com/package/@devwizard/vite-plugin-enumify',
  },
  stats: {
    downloads: {
      monthly: 236,
      weekly: 47,
    },
  },
})
