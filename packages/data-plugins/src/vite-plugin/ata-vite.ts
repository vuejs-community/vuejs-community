import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ata-vite',
  description: 'Vite plugin that compiles JSON, JS, and TS schema files to ata-validator standalone modules with TypeScript types. The Vite entry of @ata-project/unplugin.',
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
  source: {
    github: 'ata-core/ata-vite',
    npm: 'ata-vite',
  },
  links: {
    github: 'https://github.com/ata-core/ata-vite',
    npm: 'https://www.npmjs.com/package/ata-vite',
    website: 'https://github.com/ata-core/ata-vite#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 744,
      weekly: 54,
    },
  },
})
