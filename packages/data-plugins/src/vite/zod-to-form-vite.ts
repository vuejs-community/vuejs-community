import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zod-to-form/vite',
  description: 'Vite plugin for zod-to-form — transforms ?z2f imports into generated form components and optionally replaces <ZodForm> JSX call sites with generated components at build time',
  version: '0.4.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'zod',
    'zod-v4',
    'codegen',
    'forms',
    'form-generation',
    'schema-driven',
    'react-hook-form',
    'build-plugin',
    'jsx-transform',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pradeepmouli/zod-to-form',
    npm: 'https://www.npmjs.com/package/@zod-to-form/vite',
  },
  stats: {
    downloads: {
      monthly: 641,
      weekly: 61,
    },
  },
})
