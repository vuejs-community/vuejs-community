import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@usepatchly/vite-plugin',
  description: 'Vite plugin for Patchly — tags JSX elements with stable IDs so clients can visually edit them',
  version: '0.0.1-alpha.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'patchly',
    'visual-editor',
    'jsx',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/linusbjorklund/PatchlyDev',
    npm: 'https://www.npmjs.com/package/@usepatchly/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
