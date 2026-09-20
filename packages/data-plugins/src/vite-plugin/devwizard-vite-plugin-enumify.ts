import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devwizard/vite-plugin-enumify',
  description: 'Vite plugin for Laravel Enumify - auto-sync PHP enums to TypeScript',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'enum',
    'typescript',
    'codegen',
  ],
  links: {
    github: 'https://github.com/DevWizardHQ/vite-plugin-enumify',
    npm: 'https://www.npmjs.com/package/@devwizard/vite-plugin-enumify',
    website: 'https://github.com/DevWizardHQ/vite-plugin-enumify#readme',
  },
  source: {
    github: 'DevWizardHQ/vite-plugin-enumify',
    npm: '@devwizard/vite-plugin-enumify',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 352,
      weekly: 148,
    },
  },
})
