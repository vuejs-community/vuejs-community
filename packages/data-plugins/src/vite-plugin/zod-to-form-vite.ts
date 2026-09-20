import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zod-to-form/vite',
  description: 'Vite plugin for zod-to-form — transforms ?z2f imports into generated form components and optionally replaces <ZodForm> JSX call sites with generated components at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/pradeepmouli/zod-to-form',
    npm: 'https://www.npmjs.com/package/@zod-to-form/vite',
    website: 'https://github.com/pradeepmouli/zod-to-form#readme',
  },
  source: {
    github: 'pradeepmouli/zod-to-form',
    npm: '@zod-to-form/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 497,
      weekly: 78,
    },
  },
})
