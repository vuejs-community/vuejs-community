import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@laynezh/vite-plugin-lib-assets',
  description: 'A Vite Plugin extracts resource files referenced in library mode instead of embedded them as base64.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'generate lib assets',
  ],
  links: {
    github: 'https://github.com/laynezh/vite-plugin-lib-assets',
    npm: 'https://www.npmjs.com/package/@laynezh/vite-plugin-lib-assets',
    website: 'https://github.com/laynezh/vite-plugin-lib-assets#readme',
  },
  source: {
    github: 'laynezh/vite-plugin-lib-assets',
    npm: '@laynezh/vite-plugin-lib-assets',
  },
  stats: {
    stars: 135,
    downloads: {
      monthly: 133874,
      weekly: 21034,
    },
  },
})
