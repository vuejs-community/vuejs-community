import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'ata-vite',
  description: 'Vite plugin that compiles JSON, JS, and TS schema files to ata-validator standalone modules with TypeScript types.',
  version: '0.4.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'json-schema',
    'ata-validator',
    'typescript',
    'codegen',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ata-core/ata-vite',
    npm: 'https://www.npmjs.com/package/ata-vite',
  },
  stats: {
    downloads: {
      monthly: 555,
      weekly: 477,
    },
  },
})
