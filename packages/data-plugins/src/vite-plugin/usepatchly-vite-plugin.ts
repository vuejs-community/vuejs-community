import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@usepatchly/vite-plugin',
  description: 'Vite plugin for Patchly — tags JSX elements with stable IDs so clients can visually edit them',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'patchly',
    'visual-editor',
    'jsx',
  ],
  source: {
    github: 'linusbjorklund/PatchlyDev',
    npm: '@usepatchly/vite-plugin',
  },
  links: {
    github: 'https://github.com/linusbjorklund/PatchlyDev',
    npm: 'https://www.npmjs.com/package/@usepatchly/vite-plugin',
    website: 'https://github.com/linusbjorklund/PatchlyDev/tree/main/packages/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
