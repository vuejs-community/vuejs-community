import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ata-vite',
  description: 'Vite plugin for ata-validator: schemas become validators and TypeScript types at build time, with no compiler in the bundle.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'json-schema',
    'ata-validator',
    'typescript',
    'codegen',
  ],
  links: {
    github: 'https://github.com/ata-core/ata-vite',
    npm: 'https://www.npmjs.com/package/ata-vite',
    website: 'https://github.com/ata-core/ata-vite#readme',
  },
  source: {
    github: 'ata-core/ata-vite',
    npm: 'ata-vite',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 744,
      weekly: 54,
    },
  },
})
