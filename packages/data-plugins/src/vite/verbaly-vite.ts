import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@verbaly/vite',
  description: 'Zero-config Vite plugin for Verbaly: extraction, codegen and HMR.',
  version: '0.48.0',
  category: 'plugin',
  tags: [
    'i18n',
    'vite-plugin',
    'verbaly',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AronSoto/verbaly',
    npm: 'https://www.npmjs.com/package/@verbaly/vite',
  },
  stats: {
    downloads: {
      monthly: 2454,
      weekly: 1206,
    },
  },
})
